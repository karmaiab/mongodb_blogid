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
    }
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
    return {
        username: this.username,
        email: this.email,
        password:this.password,
        bio:this.bio,
        image:this.image,
        subscription:subObj.toSubscriptionJSON(),
        subscriptionExpirationDate:this.subscriptionExpirationDate,
        subscriptionStartDate:this.subscriptionStartDate,
        token: this.generateAccessToken()
    }
};

module.exports = mongoose.model('Users', users)