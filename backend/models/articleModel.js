
const mongoose = require('mongoose')

const articleSchema = new mongoose.Schema({
  title : {
    type : String,
    required : true,
  },
  content: {
    type: String,
    required: true  
  },
  image: {
    type: String,
    required: false
  },
  username: {
    type: String,
    required: true
  },
  categories: {
    type: Array,
    required: true
  }
}, {timestamps : true})

module.exports = mongoose.model('Article', articleSchema)