const mongoose=require('mongoose');
const User = require('./userModel');
const slugify = require('slugify');

const articles = new mongoose.Schema({
    slug: {
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
        default: 0
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
        default: null
    },
    comments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Comment'
    }]
},
{
    timestamps:true,
    versionKey:false
})

articles.pre('save', function(next){
    this.slug = slugify(this.title, { lower: true, replacement: '-'});
    next();
});

articles.methods.toArticleResponse = async function(){
    const authorObj = await User.findById(this.author).exec();
    return{
        slug: this.slug,
        title: this.title,
        description: this.description,
        body: this.body,
        tagList: this.tagList,
        likes: this.likes,
        author: await authorObj.toUserJSON(),
        createdAt:this.createdAt,
        updatedAt:this.updatedAt
    }
}

articles.methods.addComment = function (commentId) {
    if(this.comments.indexOf(commentId) === -1){
        this.comments.push(commentId);
    }
    return this.save();
};

articles.methods.deleteComment = function (commentId) {
    if(this.comments.indexOf(commentId) !== -1){
        this.comments.delete(commentId);
    }
    return this.save();
};


module.exports = mongoose.model("Articles", articles);