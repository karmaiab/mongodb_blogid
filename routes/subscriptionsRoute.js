const express = require('express');
const subController=require('../controllers/subscriptionController');
const verifyJWT = require('../middleware/verifyJWT');
const router = express.Router()

router.post('/sub',verifyJWT, subController.addSubscription);

router.put('/sub/:title',verifyJWT,subController.updateSubscription);

router.delete('/sub/:title',verifyJWT,subController.deleteSubscription);

router.get('/sub/all',verifyJWT,subController.AllSubscriptions);

router.put('/sub/all/:title/subscribe',verifyJWT,subController.obtainSubscription);

router.get('/sub/:title',verifyJWT,subController.subById);

module.exports = router;