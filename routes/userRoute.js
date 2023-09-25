const express = require('express');
const userController=require('../controllers/userController')
const verifyJWT = require('../middleware/verifyJWT');
const router = express.Router()

router.post('/user', userController.regUser);

router.get('/user/all', userController.allUsers);

router.get('/user/current', verifyJWT, userController.findUser);

router.put('/user/:id', userController.updateUser);

router.post('/user/login',userController.loginUser);

module.exports = router;