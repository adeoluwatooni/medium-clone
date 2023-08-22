

const postModel = require('../models/postModel')
const commentsModel = require('../models/commentsModel')

// Create Post <------------------------------------------------------>
const createPost = async (req, res) => {

  const { title, content, categories } = req.body
  const author = req.user.id

  if (!title || !content || !author || !categories) { 
    return res.status(400).json({mssg: 'Please fill all the required fields!'})
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
  const author = req.user.id

  const { text } = req.body
  const { id } = req.params

  !text && res.status(400).json({ mssg: "comment can not be empty" })
  
  try {
    // get the related post
    const relatedPost = await postModel.findById({_id : id}) 
    if (!relatedPost) {
      return res.status(400).json({mssg: "this post does not exist"})
    }

    // create the comment
    const comment = await (await commentsModel.create({ text, commentAuthor: author, post: id})).populate('commentAuthor')
    
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


//Like a post <------------------------------------------------------>
const likePost = async (req, res) => {
  const { id } = req.params
  const user = req.user.id

  try {
    const blogPost = await postModel.findById({ _id: id })

    if (blogPost.likes.includes(user)) {
      blogPost.likes = blogPost.likes.filter((userId) =>
        userId !== user
      )
      await blogPost.save()

      
      return res.status(200).json({mssg: 'Unliked post', blogPost})
    } else {
      blogPost.likes.push(user)

      await blogPost.save()

      return res.status(200).json({mssg: "You liked this post", blogPost})
    }
    await blogPost.save()

    return res.status(200).json(blogPost, {mssg: 'Successfully liked the post'})
  } catch (error) {
    res.status(500).json({error: error.message})
  }
}


// Get all Posts <------------------------------------------------------>
const getAllPosts = async (req, res) => {
  try {
    const posts = await postModel.find({}).sort({ createdAt: -1 }).populate('author', '-password')
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
    const post = await postModel.findById({ _id : id }).populate('author', '-password')
    
    res.status(200).json({post})
  } catch (error) {
    res.status(400).json({error: error.message})
  }
}


// Update Post <------------------------------------------------------>
const updatePost = async (req, res) => {

  const { id } = req.params
  const { title, content, categories } = req.body
  const author = req.user.id

  // check the post still exists
  const post = await postModel.findById({ _id: id })
  if (!post) {
    return res.status(400).json({ mssg: 'this post does not exist in our data base' })
  }
  // extracting the object id string to make sure only the author can update their posts
  const postAuthor = post.author.toString(); // Convert the ObjectId to a string from object format
  console.log('postAuthor', postAuthor);
  console.log('author', author);

    if ( postAuthor !== author ) {
      return res.status(400).json({ mssg: 'You are unauthorized to perform this action' })
    }
    try {
      const updatedPost = await postModel.findByIdAndUpdate({ _id: id }, { title, content, categories }, {new : true})
      res.status(201).json({ updatedPost })
    } catch (error) {
      res.status(400).json({ error: error.message })
    }
  
}


// Delete Post <------------------------------------------------------>
const deletePost = async (req, res) => {
  const { id } = req.params
  const user = req.user.id
  console.log('user', user);

  const post = await postModel.findById({ _id: id })
  if (!post) {
    return res.status(400).json({ mssg: 'this post does not exist in our data base' })
  }

  const postAuthor = post.author.toString() // Convert the ObjectId to a string from object format
  console.log('post Author', postAuthor);

  if ( postAuthor !== user ){
    return res.status(403).json({mssg:'you cannot delete another users post'})
  }

  try {
    const deletedPost = await postModel.findByIdAndDelete({ _id: id })
    
    res.status(200).json({ deletedPost })
  } catch (error) {
    res.status(400).json({error: error.message})
  }
}


module.exports = { createPost, getAllPosts, getOnePost, updatePost, deletePost, likePost, createComment }
