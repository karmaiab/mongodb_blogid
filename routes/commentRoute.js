const express = require('express');
const commentController = require('../controllers/commentController');
const verifyJWT = require('../middleware/verifyJWT');
const router = express.Router()

router.post('/article/:slug/comment',verifyJWT, commentController.addCommentToArticle);

router.get('/article/:slug/comments',verifyJWT, commentController.getComments);

router.delete('/article/:slug/comment/:id',verifyJWT, commentController.deleteComment);

module.exports = router;