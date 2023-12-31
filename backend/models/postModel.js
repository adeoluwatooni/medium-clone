
const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
  title : {
    type : String,
    required: true,
    trim: true
  },
  content: {
    type: String,
    required: true  
  },
  image: {
    type: String,
    required: false
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  categories: {
    type: Array,
    required: true
  },
  comments: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Comment",
    default: []
  }],
  likes: {
    type: [String],
    default: [],
  }
}, {timestamps : true})

module.exports = mongoose.model('Post', postSchema)