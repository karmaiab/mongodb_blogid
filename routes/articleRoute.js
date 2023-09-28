const express = require('express');
const articleController = require('../controllers/articleController');
const verifyJWT = require('../middleware/verifyJWT');
const router = express.Router()

router.get('/article/all', articleController.allArticle);

router.get('/article/:slug', articleController.articleBySlug);

router.post('/article',verifyJWT, articleController.createArticle);

router.put('/article/all/:id/like',verifyJWT, articleController.likeArticle);

router.put('/article/all/:id/unlike',verifyJWT, articleController.unlikeArticle);

router.put('/article/:id/update',verifyJWT, articleController.updateArticle);

router.delete('/article/:id/delete',verifyJWT, articleController.deleteArticle);

module.exports = router;