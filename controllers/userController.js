const User=require("../models/userModel");
const Subscription=require('../models/subscriptionsModel');
const asyncHandler=require('express-async-handler');
const bcrypt=require('bcrypt');

const regUser=asyncHandler(async (req,res)=>{
    const email=req.body.email;
    const username=req.body.username;
    const password=req.body.password;
    const id=req.body.subscription;
    const subscription=await Subscription.findById(id).exec();

    if(!email || !username || ! password){
        return res.status(400).json({message:"Все поля должны быть заполнены!"});
    }

    const hashedPass=await bcrypt.hash(password,10);

    const userObject={
        "email":email,
        "username":username,
        "password":hashedPass,
        "subscription":subscription._id
    };

    const createdUser= await User.create(userObject);

    if(createdUser){
        res.status(201).json({
            user:await createdUser.toUserResponse()
        })
    }else{
        res.status(422).json({
            errors:{
                body:"Ошибка при создании пользователя"
            }
        });
    }
});


const findUser=asyncHandler(async(req,res)=>{
    const data = await User.findById(req.params.id).exec();
    if(!data){
        return res.status(400).json({
            message:"Пользователь не найден!"
        });
    }
    return res.status(200).json({
        user:await data.toUserResponse()
    });
});

const allUsers=asyncHandler(async(req,res)=>{
    const query={}
    const data = await User.find();
    const UserCount = await User.count(query);
    return res.status(200).json({
            user:await Promise.all(data.map(async user=>{
                return await user.toUserResponse();
            })),
            userCount:UserCount
    });
});

const updateUser=asyncHandler(async(req,res)=>{
    const username = req.body.username;
    const email = req.body.email;
    const bio = req.body.bio;
    const image = req.body.image;

    const change=await User.findById(req.params.id).exec();

    if (username){
        change.username=username;
    }
    if (email){
        change.email=email;
    }
    if (bio){
        change.bio=bio;
    }
    if (image){
        change.image=image;
    }

    await change.save();

    return res.status(200).json({
        user:await change.toUserResponse()
    });
})
module.exports={
    regUser,
    findUser,
    allUsers,
    updateUser
}