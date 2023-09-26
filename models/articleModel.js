const mongoose=require('mongoose');
const User = require('./userModel');

const articles = new mongoose.Schema({
    slug: {
        required: true,
        type: String,
        lowercase: true,
        unique: true,
        index: true
    },
    title: {
        required: true,
        type: String,
        unique: true
    },
    description: {
        required: true,
        type: String
    },
    body: {
        required: true,
        type: String
    },
    tagList: [{
        type: String,
        required: true
    }],
    likes: {
        type: Number,
        default: null
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
        default: null
    }
},
{
    timestamps:false,
    versionKey:false
})


articles.methods.toArticleResponse = async function(){
    const authorObj = await User.findById(this.author).exec();
    return{
        slug: this.slug,
        title: this.title,
        description: this.description,
        body: this.body,
        tagList: this.tagList,
        likes: this.likes,
        author: await authorObj.toUserJSON()
    }
}

module.exports = mongoose.model("Articles", articles);