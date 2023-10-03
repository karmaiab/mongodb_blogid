const express = require('express');
const profileController=require('../controllers/profileController')
const verifyJWT = require('../middleware/verifyJWT');
const router = express.Router()


router.post('/profile/:username/follow', verifyJWT, profileController.followUser);

router.post('/profile/:username/unfollow', verifyJWT, profileController.unfollowUser);

module.exports = router;