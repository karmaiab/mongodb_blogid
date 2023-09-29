const Article = require('../models/articleModel');
const User = require('../models/userModel');
const Comment = require('../models/commentModel');
const asyncHandler = require('express-async-handler');

const addCommentToArticle=asyncHandler(async(req,res)=>{
    const loginUser = await User.findOne({email:req.userEmail}).exec();
    const article = await Article.findOne(req.params.slug)
    const body=req.body.body

    if (!article) {
        return res.status(401).json({
            message: "Статья не найдена!"
        });
    }

    const newComment=await Comment.create({
        body:body,
        author:loginUser._id,
        article:article._id
    })

    await article.addComment(newComment._id);

    return res.status(200).json({
        comment: await newComment.toCommentResponse(loginUser)
    })
})

const getComments=asyncHandler(async(req,res)=>{
    const article = await Article.findOne(req.params.slug)
    const loginUser = await User.findOne({email:req.userEmail}).exec();

    if (!article) {
        return res.status(401).json({
            message: "Статья не найдена!"
        });
    }

    return res.status(200).json({
        comment: await Promise.all(article.comments.map(async commentId=>{
            const commentObj = await Comment.findById(commentId).exec();
            return await commentObj.toCommentResponse(loginUser);
        })),
    })
})

const deleteComment=asyncHandler(async(req,res)=>{
    const loginUser = await User.findOne({email:req.userEmail}).exec();
    const article = await Article.findOne(req.params.slug)
    if(!article.author.equals(loginUser._id)){
        return res.status(401).json({
            message:"Отсутствуют права!"
        })
    }
    const comment = await Comment.findById(req.params.id).exec();
    await Comment.deleteOne({_id:comment._id})

    if (!article) {
        return res.status(401).json({
            message: "Статья не найдена!"
        });
    }

    res.send(`Комментарий "${comment.body}" был удален!`)
})

module.exports = {
    addCommentToArticle,
    getComments,
    deleteComment
}