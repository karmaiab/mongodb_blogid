const asyncHandler = require('express-async-handler');
const Articles = require('../models/articleModel');



const allArticle = asyncHandler(async(req, res) => {
    const query={}
    const data = await Articles.find();
    const ArticleCount = await Articles.count(query);
    return res.status(200).json({
        article:await Promise.all(data.map(async Articles=>{
            return await Articles.toArticleResponse();
        })),
        articleCount:ArticleCount
    })
});


const articleBySlug = asyncHandler(async(req, res) => {

    const article = await Articles.findOne(req.params).exec();

    if (!article){
        return res.status(401).json({
            message: "Статья не найдена!"
        });
    };

    return res.status(200).json({
        article: await article.toArticleResponse()   
    });
});

module.exports = {
    articleBySlug,
    allArticle
};