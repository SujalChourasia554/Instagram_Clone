const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
    },
    picture: String,
    caption: String,
    likes: [],
    comment: [],
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('post' , postSchema )