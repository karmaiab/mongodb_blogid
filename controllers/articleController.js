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

    const article = await Article.findOne(req.params).exec();

    if (!article){
        return res.status(401).json({
            message: "Статья не найдена!"
        });
    };

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
    const article = await Article.findById(req.params.id)
    if(!article){
        return res.status(404).json({
            message:"Статья не найдена!"
        })
    }
    await loginUser.like(article._id)
    const idStr = loginUser._id.toString();
    for (const article of this.likedArticles) {
        if (article.toString() === idStr) {
            return true;
        }
    }
    article.likes=article.likes+1
    await article.save();
    return res.status(200).json({
        article: await article.toArticleResponse(loginUser)
    })
})

const unlikeArticle=asyncHandler(async(req,res)=>{
    const loginUser = await User.findOne({email:req.userEmail}).exec();
    const article = await Article.findById(req.params.id)
    if(!article){
        return res.status(404).json({
            message:"Статья не найдена!"
        })
    }
    await loginUser.like(article._id)
    const idStr = loginUser._id.toString();
    for (const article of this.likedArticles) {
        if (article.toString() === idStr) {
            return true;
        }
    }
    article.likes=article.likes+1
    await article.save();
    return res.status(200).json({
        article: await article.toArticleResponse(loginUser)
    })
})

module.exports = {
    articleBySlug,
    allArticle,
    createArticle,
    likeArticle
};