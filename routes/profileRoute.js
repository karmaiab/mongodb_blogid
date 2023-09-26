const express = require('express');
const profileController=require('../controllers/profileController')
const verifyJWT = require('../middleware/verifyJWT');
const router = express.Router()


router.post('/:id/follow', verifyJWT, profileController.followUser);

module.exports = router;