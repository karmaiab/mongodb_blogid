const User=require("../models/userModel");
const Subscription=require('../models/subscriptionsModel');
const asyncHandler=require('express-async-handler');
const bcrypt=require('bcrypt');

const regUser=asyncHandler(async (req,res)=>{
    const email=req.body.email;
    const username=req.body.username;
    const password=req.body.password;

    if(!email || !username || ! password){
        return res.status(400).json({message:"Все поля должны быть заполнены!"});
    }
    const hashedPass=await bcrypt.hash(password,10);
    const userObject={
        "email":email,
        "username":username,
        "password":hashedPass,
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


const currentUser=asyncHandler(async(req,res)=>{
    const email = req.userEmail;
    const user = await User.findOne({ email }).exec();
    if(!user){
        return res.status(400).json({
            message:"Пользователь не найден!"
        });
    }
    return res.status(200).json({
        user:await user.toUserResponseAuth()
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


const loginUser=asyncHandler(async(req,res)=>{
    const email=req.body.email
    const password=req.body.password
    
    if(!email || !password){
        return res.status(400).json({message:"Все поля должны быть заполнены!"})
    }

    const loginUser=await User.findOne({email}).exec();

    if(!loginUser){
        return res.status(404).json({message:"Пользователь не найден!"})
    }

    const match =await bcrypt.compare(password,loginUser.password);

    if(!match){
        return res.status(401).json({message:"Ошибка авторизации: Неправильный пароль"})
    }
    

    res.status(200).json({
        user:await loginUser.toUserResponseAuth()
    });
})

const updateUser=asyncHandler(async(req,res)=>{
    const loginUser = await User.findOne({email:req.userEmail}).exec();
    const username = req.body.username;
    const email = req.body.email;
    const bio = req.body.bio;
    const image = req.body.image;
    
    const change=await User.findById(loginUser._id).exec();

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
        user:await change.toUserResponseAuth()
    });
})

const updatePassword=asyncHandler(async(req,res)=>{
    const oldPassword=req.body.oldPassword
    const newPassword=req.body.newPassword
    if(!oldPassword || !newPassword){
        return res.status(400).json({message:"Все поля должны быть заполнены!"})
    }
    const loginUser = await User.findOne({email:req.userEmail}).exec();
    if(!loginUser){
        return res.status(404).json({message:"Пользователь не найден!"})
    }

    const match =await bcrypt.compare(oldPassword,loginUser.password);

    if(!match){
        return res.status(401).json({message:"Ошибка обновления пароля: Неправильный пароль"})
    }
    const hashedPass=await bcrypt.hash(newPassword,10);
    loginUser.password=hashedPass
    await loginUser.save();

    return res.status(200).json({
        user:await loginUser.toUserResponseAuth()
    });
})


module.exports={
    regUser,
    currentUser,
    allUsers,
    updateUser,
    loginUser,
    updatePassword
}