

const post = require('../models/postModel')

const createPost = async (req, res) => {
  const { title, content, author, categories } = req.body
  
  if (!title || !content || !author || !categories) { 
    return res.status(400).json({mssg: 'please fill all the required fields!'})
  }

  try {
    const blogPost = await post.create({ title, content, author, categories })
    
    res.status(200).json({blogPost})
  } catch (error) {
    res.status(500).json({error: error.message})
  }
}

module.exports = { createPost }