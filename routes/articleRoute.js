const express = require('express');
const articleController = require('../controllers/articleController');
const verifyJWT = require('../middleware/verifyJWT');
const router = express.Router()

router.get('/article/all', articleController.allArticle);

router.get('/article/:slug', articleController.articleBySlug);

router.post('/article',verifyJWT, articleController.createArticle);

router.put('/article/all/:id/like',verifyJWT, articleController.likeArticle);

module.exports = router;