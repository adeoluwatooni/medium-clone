
const mongoose = require('mongoose')

const commentsSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
    trim: true,
    maxlength:[95,'Text cannot exceed 95 characters']
  },
  post: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Post'
  },
  commentAuthor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  }
}, {timestamps : true})

module.exports  = mongoose.model('Comment', commentsSchema)