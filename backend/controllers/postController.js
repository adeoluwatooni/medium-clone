const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')

const postModel = require('../models/postModel')

// configure dotenv
dotenv.config()

const verifyToken = (token) => {
  return jwt.verify(token, process.env.SECRET)
}

// Create Post <------------------------------------------------------>
const createPost = async (req, res) => {
  
  const {token} = req.body
  const result = await verifyToken(token)
  console.log(result);

  const { title, content, categories } = req.body
  const author = result._id

  if (!title || !content || !author || !categories) { 
    return res.status(400).json({mssg: 'please fill all the required fields!'})
  }

  try {
    const blogPost = await (await postModel.create({ title, content, author, categories })).populate('author')
    // console.log(blogPost.author.fullname)
    res.status(200).json({blogPost})
  } catch (error) {
    res.status(500).json({error: error.message})
  }
}


// Get all Posts <------------------------------------------------------>
const getAllPosts = async (req, res) => {
  try {
    const posts = await postModel.find({}).sort({ createdAt: -1 })

    res.status(200).json({posts})
  } catch (error) {
    res.status(500).json({error: error.message})
  }
}

// Get one Post <------------------------------------------------------>
const getOnePost = async (req, res) => {
  const { id } = req.params

  const post = await postModel.findById({ _id: id })
  if (!post) {
    return res.status(400).json({ mssg: 'this post does not exist in our data base' })
  }
  
  try {
    const post = await postModel.findById({ _id : id })
    
    res.status(200).json({post})
  } catch (error) {
    res.status(400).json({error: error.message})
  }
}

// Update Post <------------------------------------------------------>
const updatePost = async (req, res) => {
  const { id } = req.params
  const {title, content, categories} = req.body

  console.log(id);
  const post = await postModel.findById({ _id: id })
  if (!post) {
    return res.status(400).json({ mssg: 'this post does not exist in our data base' })
  }
console.log(post)
  try {
    const updatedPost = await postModel.findByIdAndUpdate({ _id: id }, { title, content, categories })
    res.status(201).json({updatedPost})
  } catch (error) {
    res.status(400).json({error: error.message})
  }
}

// Delete Post <------------------------------------------------------>

const deletePost = async (req, res) => {
  const { id } = req.params

  const post = await postModel.findById({ _id: id })
  if (!post) {
    return res.status(400).json({ mssg: 'this post does not exist in our data base' })
  }

  try {
    const deletedPost = await postModel.findByIdAndDelete({ _id: id })
    
    res.status(200).json({ deletedPost })
  } catch (error) {
    res.status(400).json({error: error.message})
  }
}


module.exports = { createPost, getAllPosts, getOnePost,updatePost, deletePost }