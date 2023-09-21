const Subscription=require('../models/subscriptionsModel');
const asyncHandler=require('express-async-handler');

const addSubscription=asyncHandler(async(req,res)=>{
    const title = req.body.title;
    const status = req.body.status;
    const price = req.body.price;
    const articleCountPerMonth = req.body.articleCountPerMonth;

    if(!title || !status || !price || !articleCountPerMonth){
        return res.status(400).json({message:"Все поля должны быть заполнены!"});
    }

    const subObject={
        "title":title,
        "status":status,
        "price":price,
        "articleCountPerMonth":articleCountPerMonth
    }

    const createdSubscription=await Subscription.create(subObject);

    if(createdSubscription){
        res.status(201).json({
            subscription:createdSubscription.toSubscriptionResponse()
        })
    }else{
        res.status(422).json({
            errors:{
                body:"Ошибка при создании подписки"
            }
        });
    }
});


const updateSubscription=asyncHandler(async(req,res)=>{
    const title = req.body.title;
    const status = req.body.status;
    const price = req.body.price;
    const articleCountPerMonth = req.body.articleCountPerMonth;

    const change=await Subscription.findById(req.params.id).exec();

    if (title){
        change.title=title;
    }
    if (status){
        change.status=status;
    }
    if (price){
        change.price=price;
    }
    if (articleCountPerMonth){
        change.articleCountPerMonth=articleCountPerMonth;
    }

    await change.save();

    return res.status(200).json({
        subscription:change.toSubscriptionResponse()
    });
});

const deleteSubscription=asyncHandler(async(req,res)=>{
    const deleted=await Subscription.findByIdAndDelete(req.params.id);
    res.send(`Subscription "${deleted.title}" has been deleted..`)
});

const AllSubscriptions=asyncHandler(async(req,res)=>{
    const data = await Subscription.find();
    return res.status(200).json({
        subscription:data
    });
});

const subById=asyncHandler(async(req,res)=>{
    const data = await Subscription.findById(req.params.id);
    return res.status(200).json({
        subscription:data
    });
});

module.exports = {
    addSubscription,
    updateSubscription,
    deleteSubscription,
    AllSubscriptions,
    subById
}