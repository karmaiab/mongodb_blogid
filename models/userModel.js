const mongoose=require('mongoose');
const jwt = require("jsonwebtoken");
const Subscription = require('./subscriptionsModel');

const users=new mongoose.Schema({
    email:{
        required:true,
        type:String,
        lowercase: true,
        unique: true,
        match: [/\S+@\S+\.\S+/, 'is invalid']
    },
    username:{
        required:true,
        type:String,
        unique:true
    },
    password:{
        type: String,
        required: true
    },
    bio:{
        type:String,
        default: ""
    },
    image:{
        type:String,
        default:"https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTAxL3JtNjA5LXNvbGlkaWNvbi13LTAwMi1wLnBuZw.png"
    },
    subscription:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"subscriptions",
        default:null
    },
    subscriptionExpirationDate:{
        type:Date,
        default: () => new Date(Date.now()+31*24*60*60*1000),
    },
    subscriptionStartDate:{
        type:Date,
        default: Date.now
    },
    followingUsers:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    }],
    followedUsers:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    }]
},
{
    timestamps:false,
    versionKey:false
});

users.methods.generateAccessToken = function() {
    const accessToken = jwt.sign({
            "user": {
                "id": this._id,
                "email": this.email,
                "password": this.password
            }
        },
        process.env.ACCESS_TOKEN_SECRET,
        { expiresIn: "1d"}
    );
    return accessToken;
}

users.methods.toUserResponse = async function() {
    const subObj=await Subscription.findById(this.subscription).exec();
    const token=this.generateAccessToken()
    return {
        username: this.username,
        email: this.email,
        password:this.password,
        bio:this.bio,
        image:this.image,
        subscription:subObj.toSubscriptionJSON(),
        subscriptionExpirationDate:this.subscriptionExpirationDate,
        subscriptionStartDate:this.subscriptionStartDate,
        token: token
    }
};

users.methods.toUserResponseAuth = async function(token) {
    const subObj=await Subscription.findById(this.subscription).exec();
    return {
        username: this.username,
        email: this.email,
        password:this.password,
        bio:this.bio,
        image:this.image,
        subscription:subObj.toSubscriptionJSON(),
        subscriptionExpirationDate:this.subscriptionExpirationDate,
        subscriptionStartDate:this.subscriptionStartDate,
        token:token
    }
};

users.methods.toUserJSON = async function() {
    const subObj=await Subscription.findById(this.subscription).exec();
    return {
        username: this.username,
        email: this.email,
        password:this.password,
        bio:this.bio,
        image:this.image,
        subscription:subObj.toSubscriptionJSON(),
        subscriptionExpirationDate:this.subscriptionExpirationDate,
        subscriptionStartDate:this.subscriptionStartDate
    }
};

users.methods.follow = function (id) {
    if(this.followingUsers.indexOf(id) === -1){
        this.followingUsers.push(id);
    }
    return this.save();
};

users.methods.addFollower = function (id) {
    if(this.followedUsers.indexOf(id) === -1){
        this.followedUsers.push(id);
    }
    return this.save();
};

users.methods.toProfileJSON = function (user) {
    return {
        username: this.username,
        bio: this.bio,
        image: this.image,
        following: user ? user.isFollowing(this._id) : false
    }
};

users.methods.isFollowing = function (id) {
    const idStr = id.toString();
    for (const followingUser of this.followingUsers) {
        if (followingUser.toString() === idStr) {
            return true;
        }
    }
    return false;
};


module.exports = mongoose.model('Users', users)