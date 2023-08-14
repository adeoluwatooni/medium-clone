const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')

const postModel = require('../models/postModel')
const commentModel = require('../models/commentsModel')
const commentsModel = require('../models/commentsModel')

// configure dotenv
dotenv.config()


const verifyToken = (token) => {
  return jwt.verify(token, process.env.SECRET)
}


// Create Post <------------------------------------------------------>
const createPost = async (req, res) => {
  
  const {token} = req.body
  const result = await verifyToken(token)
  // console.log(result);

  const { title, content, categories } = req.body
  const author = result._id

  if (!title || !content || !author || !categories) { 
    return res.status(400).json({mssg: 'please fill all the required fields!'})
  }

  try {
    const blogPost = await postModel.create({ title, content, author, categories })

    const { password, ...others } = blogPost.toObject()
    // console.log(blogPost.author.fullname)
    res.status(200).json({others})
  } catch (error) {
    res.status(500).json({error: error.message})
  }
}


// Create a comment to a post <------------------------------------------------------>

const createComment = async (req, res) => {
  // making sure users are logged in before they can comment
  const {token} = req.body
  const result = await verifyToken(token)

  const { id } = req.params

  const { text } = req.body
  const author = result._id

  !text && res.status(400).json({ mssg: "comment can not be empty" })
  
  try {
// get the related post
    const relatedPost = await postModel.findById({_id : id}) 
    if (!relatedPost) {
      return res.status(400).json({mssg: "this post does not exist"})
    }

    // create the comment
    const comment = await commentsModel.create({ text, commentAuthor: author, post: id})
    
    // push the comment into the post.comments array
    relatedPost.comments.push(comment)

    // save and redirect...
    await relatedPost.save()
    res.status(200).json({ relatedPost })
    // .redirect('/articles')
  } catch (error) {
    res.status(500).json({error: error.message})
  }
}



// Get all Posts <------------------------------------------------------>
const getAllPosts = async (req, res) => {
  try {
    const posts = await postModel.find({}).sort({ createdAt: -1 }).populate('author', 'fullname')
    if (posts.length < 1 ) {
      return res.status(200).json({mssg: 'No blog post available'})
    }
    res.status(200).json({posts})
  } catch (error) {
    res.status(500).json({error: error.message})
  }
}


// Get one Post <------------------------------------------------------>
const getOnePost = async (req, res) => {
  const { id } = req.params

  // check if the post even exists at all
  const post = await postModel.findById({ _id: id })
  if (!post) {
    return res.status(400).json({ mssg: 'this post does not exist in our data base' })
  }
  
  try {
    const post = await postModel.findById({ _id : id }).populate('author', 'fullname')
    
    res.status(200).json({post})
  } catch (error) {
    res.status(400).json({error: error.message})
  }
}


// Update Post <------------------------------------------------------>
const updatePost = async (req, res) => {
  const { token } = req.body
  
  // confirm the user is logged in/signed up
  if (!token) {
    return res.status(400).json({ mssg: 'No authorization' })
  } 
  
  const result = await verifyToken(token)
  const author = result._id
  console.log('author' ,author)

  const { id } = req.params
  const { title, content, categories } = req.body

  // check the post still exists
  const post = await postModel.findById({ _id: id })
  if (!post) {
    return res.status(400).json({ mssg: 'this post does not exist in our data base' })
  }
  // extracting the objectid string to make sure only the author can update their posts
  const postAuthor = post.author.toString(); // Convert the ObjectId to a string from object format
  console.log('postAuthor', postAuthor);

      
    if (postAuthor !== author) {
      return res.status(400).json({ mssg: 'You are unauthorized to perform this action' })
    }
    try {
      const updatedPost = await postModel.findByIdAndUpdate({ _id: id }, { title, content, categories })
      res.status(201).json({ updatedPost })
    } catch (error) {
      res.status(400).json({ error: error.message })
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


module.exports = { createPost, getAllPosts, getOnePost,updatePost, deletePost, createComment }