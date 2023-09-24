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

subscriptions.methods.toSubscriptionResponse=function () {
    return{
        title : this.title,
        status : this.status,
        price : this.price,
        articleCountPerMonth : this.articleCountPerMonth        
    }
};

subscriptions.methods.toSubscriptionJSON = function () {
    return{
        title : this.title,
        status : this.status,
        price : this.price,
        articleCountPerMonth : this.articleCountPerMonth        
    }
};

module.exports = mongoose.model('Subscriptions', subscriptions)