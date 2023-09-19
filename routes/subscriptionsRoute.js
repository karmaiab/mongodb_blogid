const express = require('express');
const Subscriptions = require('../models/subscriptionsModel');
const subController=require('../controllers/subscriptionController')
const router = express.Router()


// router.post('/sub', async (req, res) => {
//     const subs = new Subscriptions({
//         title: req.body.title,
//         status: req.body.status,
//         price: req.body.price,
//         articleCountPerMonth: req.body.articleCountPerMonth
//     })
//     try{
//         const dataToSave= await subs.save();
//         res.status(200).json(dataToSave)
//     }
//     catch(error){
//         res.status(400).json({message: error.message})
//     }
// })

router.get('/sub/all', async (req, res) => {
    try{
        const data = await Subscriptions.find();
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

router.get('/sub/:id', async (req, res) => {
    try{
        const data = await Subscriptions.findById(req.params.id);
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

router.patch('/sub/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const updatedData = req.body;
        const options = { new: true };

        const result = await Subscriptions.findByIdAndUpdate(
            id, updatedData, options
        )

        res.send(result)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})

router.delete('/sub/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const data = await Subscriptions.findByIdAndDelete(id)
        res.send(`Subscription "${data.title}" has been deleted..`)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})


router.post('/sub', subController.addSubscription);

module.exports = router;