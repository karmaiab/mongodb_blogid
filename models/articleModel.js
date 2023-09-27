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
    }
},
{
    timestamps:true,
    versionKey:false
})

articles.pre('save', function(next){
    this.slug = slugify(this.title, { lower: true, replacement: '-'});
    next();
});

articles.methods.toArticleResponse = async function(user){
    const authorObj = await User.findById(this.author).exec();
    return{
        slug: this.slug,
        title: this.title,
        description: this.description,
        body: this.body,
        tagList: this.tagList,
        likes: this.likes,
        favorited: user ? user.isLiked(this._id) : false,
        author: await authorObj.toUserJSON(),
        createdAt:this.createdAt,
        updatedAt:this.updatedAt
    }
}

module.exports = mongoose.model("Articles", articles);