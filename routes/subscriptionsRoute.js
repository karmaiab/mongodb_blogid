const express = require('express');
const Subscriptions = require('../models/subscriptionsModel');
const subController=require('../controllers/subscriptionController');
const verifyJWT = require('../middleware/verifyJWT');
const router = express.Router()

router.post('/sub',verifyJWT, subController.addSubscription);

router.put('/sub/:id',verifyJWT,subController.updateSubscription);

router.delete('/sub/:id',verifyJWT,subController.deleteSubscription);

router.get('/sub/all',verifyJWT,subController.AllSubscriptions);

router.get('/sub/:id',verifyJWT,subController.subById);

module.exports = router;