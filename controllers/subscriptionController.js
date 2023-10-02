const Subscription=require('../models/subscriptionsModel');
const User=require("../models/userModel");
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

    const change=await Subscription.findOne(req.params).exec();

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
    const sub=await Subscription.findOne(req.params);
    const deleted=await Subscription.findByIdAndRemove(sub._id);
    res.send(`Подписка "${deleted.title}" была удалена!`)
});

const AllSubscriptions=asyncHandler(async(req,res)=>{
    const data = await Subscription.find();
    return res.status(200).json({
        subscription:data
    });
});

const subById=asyncHandler(async(req,res)=>{
    const data = await Subscription.findOne(req.params);
    return res.status(200).json({
        subscription:data
    });
});

const obtainSubscription=asyncHandler(async(req,res)=>{
    const loginUser = await User.findOne({email:req.userEmail}).exec();
    const subscription = await Subscription.findOne(req.params)
    const authHeader = req.headers.authorization || req.headers.Authorization
    const token = authHeader.split(' ')[1];
    if(subscription.status==="Monthly"){
        loginUser.subscriptionStartDate=Date.now()
        loginUser.subscriptionExpirationDate=new Date(Date.now()+31*24*60*60*1000)
    }
    if(subscription.status==="Yearly"){
        loginUser.subscriptionStartDate=Date.now()
        loginUser.subscriptionExpirationDate=new Date(Date.now()+365*24*60*60*1000)
    }
    loginUser.remainingViews=subscription.articleCountPerMonth
    loginUser.subscription=subscription._id
    await loginUser.save();
    return res.status(200).json({
        user:await loginUser.toUserResponseAuthSub(token)
    });
})

module.exports = {
    addSubscription,
    updateSubscription,
    deleteSubscription,
    AllSubscriptions,
    subById,
    obtainSubscription
}