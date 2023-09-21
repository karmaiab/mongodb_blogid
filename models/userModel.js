const mongoose=require('mongoose');
const jwt = require("jsonwebtoken");

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
        type:DBRef,
        ref:"subscriptions"
    },
    subscriptionExpirationDate:{
        type:Date,
        default: new Date(ISODate().setDate(ISODate().getDate() +31)),
    },
    subscriptionStartDate:{
        type:Date,
        default: new ISODate
    }
},
{
    timestamps:true,
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

users.methods.toUserResponse = function() {
    return {
        username: this.username,
        email: this.email,
        bio: this.bio,
        image: this.image,
        subscription:this.subscription,
        subscriptionExpirationDate:this.subscriptionExpirationDate,
        subscriptionStartDate:this.subscriptionStartDate,
        token: this.generateAccessToken()
    }
};