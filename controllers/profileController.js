const User=require("../models/userModel");
const asyncHandler=require('express-async-handler');


const followUser=asyncHandler(async(req,res)=>{
    const loginUser = await User.findOne({email:req.userEmail}).exec();
    const user = await User.findById(req.params.id)
    if(!user || !loginUser){
        return res.status(404).json({
            message:"Пользователь не найден!"
        })
    }
    await loginUser.follow(user._id)
    await user.addFollower(loginUser._id)

    return res.status(200).json({
        profile: user.toProfileJSON(loginUser)
    })
});

const unfollowUser=asyncHandler(async(req,res)=>{
    const loginUser = await User.findOne({email:req.userEmail}).exec();
    const user = await User.findById(req.params.id)
    if(!user || !loginUser){
        return res.status(404).json({
            message:"Пользователь не найден!"
        })
    }
    await loginUser.unfollow(user._id)
    await user.deleteFollower(loginUser._id)

    return res.status(200).json({
        profile: user.toProfileJSON(loginUser)
    })
});

module.exports={
    followUser,
    unfollowUser
}