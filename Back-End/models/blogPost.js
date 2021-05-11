const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BlogPost = new Schema({
    title: String,
    body: String,
    image: String,
},
{
    timestamps: true
})

const Post = mongoose.model('Post', BlogPost)

module.exports = Post; 