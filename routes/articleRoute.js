const express = require('express');
const articleController = require('../controllers/articleController');
const verifyJWT = require('../middleware/verifyJWT');
const router = express.Router()

router.get('/article/all', articleController.allArticle);

router.get('/article/:slug',verifyJWT, articleController.articleBySlug);

router.post('/article',verifyJWT, articleController.createArticle);

router.put('/article/all/:slug/like',verifyJWT, articleController.likeArticle);

router.put('/article/all/:slug/unlike',verifyJWT, articleController.unlikeArticle);

router.put('/article/:slug/update',verifyJWT, articleController.updateArticle);

router.delete('/article/:slug/delete',verifyJWT, articleController.deleteArticle);

module.exports = router;