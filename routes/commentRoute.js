const express = require('express');
const commentController = require('../controllers/commentController');
const verifyJWT = require('../middleware/verifyJWT');
const router = express.Router()

router.post('/:id/comment',verifyJWT, commentController.addCommentToArticle);

router.get('/:id/comments',verifyJWT, commentController.getComments);

router.delete('/:id/comment/:comid',verifyJWT, commentController.deleteComment);

module.exports = router;