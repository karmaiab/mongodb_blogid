const express = require('express');
const profileController=require('../controllers/profileController')
const verifyJWT = require('../middleware/verifyJWT');
const router = express.Router()


router.post('/:id/follow', verifyJWT, profileController.followUser);

router.post('/:id/unfollow', verifyJWT, profileController.unfollowUser);

module.exports = router;