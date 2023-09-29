const express = require('express');
const commentController = require('../controllers/commentController');
const verifyJWT = require('../middleware/verifyJWT');
const router = express.Router()

router.post('/:slug/comment',verifyJWT, commentController.addCommentToArticle);

router.get('/:slug/comments',verifyJWT, commentController.getComments);

router.delete('/:slug/comment/:id',verifyJWT, commentController.deleteComment);

module.exports = router;