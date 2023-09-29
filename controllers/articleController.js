const asyncHandler = require('express-async-handler');
const Article = require('../models/articleModel');
const User=require("../models/userModel");


const allArticle = asyncHandler(async(req, res) => {
    const query={}
    const data = await Article.find();
    const ArticleCount = await Article.count(query);
    return res.status(200).json({
        article:await Promise.all(data.map(async Articles=>{
            return await Articles.toArticleResponse();
        })),
        articleCount:ArticleCount
    })
});


const articleBySlug = asyncHandler(async(req, res) => {
    const loginUser = await User.findOne({email:req.userEmail}).exec();
    const article = await Article.findOne(req.params).exec();
    if(loginUser.remainingViews==0){
        return res.status(422).json({
            message: "Просмотры закончились!"
        });
    }
    console.log(loginUser)
    if (!article){
        return res.status(401).json({
            message: "Статья не найдена!"
        });
    };
    loginUser.remainingViews=loginUser.remainingViews-1
    await loginUser.save()
    return res.status(200).json({
        article: await article.toArticleResponse()   
    });
});

const createArticle = asyncHandler(async(req,res)=>{
    const title=req.body.title
    const description=req.body.description
    const body=req.body.body
    const tagList=req.body.tagList
    const loginUser = await User.findOne({email:req.userEmail}).exec();
    console.log(loginUser)
    if (!title || !description || !body || !tagList) {
        res.status(400).json({message: "Все поля должны быть заполнены!"});
    }

    const articleObject={
        "title":title,
        "description":description,
        "body":body,
        "tagList":tagList,
        "author":loginUser._id
    };
    const createdArticle= await Article.create(articleObject);

    if(createdArticle){
        res.status(201).json({
            article:await createdArticle.toArticleResponse(loginUser)
        })
    }else{
        res.status(422).json({
            errors:{
                body:"Ошибка при создании статьи!"
            }
        });
    }
});

const likeArticle=asyncHandler(async(req,res)=>{
    const loginUser = await User.findOne({email:req.userEmail}).exec();
    const article = await Article.findOne(req.params.slug)
    if(!article){
        return res.status(404).json({
            message:"Статья не найдена!"
        })
    }
    if (loginUser.likedArticles.includes(article._id)) {
        article.likes=article.likes
    }else{
        article.likes=article.likes+1
       }
    await loginUser.like(article._id)
    await article.save();
    return res.status(200).json({
        article: await article.toArticleResponse(loginUser)
    })
})

const unlikeArticle=asyncHandler(async(req,res)=>{
    const loginUser = await User.findOne({email:req.userEmail}).exec();
    const article = await Article.findOne(req.params.slug)
    if(!article){
        return res.status(404).json({
            message:"Статья не найдена!"
        })
    }
    if (loginUser.likedArticles.includes(article._id)) {
        article.likes=article.likes-1
    }else{
        article.likes=article.likes
       }
    await loginUser.unLike(article._id)
    await article.save();
    return res.status(200).json({
        article: await article.toArticleResponse(loginUser)
    })
})

const updateArticle=asyncHandler(async(req,res)=>{
    const loginUser = await User.findOne({email:req.userEmail}).exec();
    const article = await Article.findOne(req.params.slug)
    if(!article.author.equals(loginUser._id)){
        return res.status(401).json({
            message:"Отсутствуют права!"
        })
    }
    const title=req.body.title
    const description=req.body.description
    const body=req.body.body
    const tagList=req.body.tagList

    if (title) {
        article.title = title;
    }
    if (description) {
        article.description = description;
    }
    if (body) {
        article.body = body;
    }
    if (tagList) {
        article.tagList = tagList;
    }
    await article.save()
    return res.status(200).json({
        article: await article.toArticleResponse(loginUser)
    })
})

const deleteArticle=asyncHandler(async(req,res)=>{
    const loginUser = await User.findOne({email:req.userEmail}).exec();
    const article = await Article.findOne(req.params.slug)
    if(!article.author.equals(loginUser._id)){
        return res.status(401).json({
            message:"Отсутствуют права!"
        })
    }
    await Article.findByIdAndDelete(article._id)
    res.send(`Статья "${article.title}" была удалена!`)
})

module.exports = {
    articleBySlug,
    allArticle,
    createArticle,
    likeArticle,
    unlikeArticle,
    updateArticle,
    deleteArticle
};