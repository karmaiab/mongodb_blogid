const mongoose=require('mongoose');

const subscriptions=new mongoose.Schema({
    title:{
        required: true,
        type:String
    },
    status:{
        required:true,
        type:String
    },
    price:{
        required:true,
        type:Number
    },
    articleCountPerMonth:{
        required:true,
        type:Number
    }
},
{
    timestamps:false,
    versionKey:false
});

module.exports = mongoose.model('Subscriptions', subscriptions)