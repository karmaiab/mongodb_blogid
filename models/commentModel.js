const mongoose=require('mongoose');
const User = require('./userModel');

const comments = new mongoose.Schema({
    body: {
        type: String,
        required:true
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
        required:true
    },
    article: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "articles",
        required:true
    }
},
{
    timestamps:true,
    versionKey:false
})

comments.methods.toCommentResponse=async function(user){
    const authorObj = await User.findById(this.author).exec();
    return{
        body:this.body,
        createdAt:this.createdAt,
        updatedAt:this.updatedAt,
        author:authorObj.toProfileJSON(user)

    }
};

module.exports = mongoose.model("Comments", comments);