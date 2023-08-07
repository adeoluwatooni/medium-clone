

const post = require('../models/postModel')

const createPost = (req, res) => {
  const { title, content } = req.body
  
  if (!title || !content || !author || !categories) { 
    return res.status(400)
  }
}

module.exports = { createPost }