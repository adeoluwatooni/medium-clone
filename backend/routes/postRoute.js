const express = require('express')
const { createPost, getAllPosts, getOnePost, deletePost, updatePost } = require('../controllers/postController')

// adding the custom authentication middleware
// const requireAuth = require('../middleware/requireAuth')

const router = express.Router()

// confirming Authentication 
// router.use(requireAuth)

// create a post
router.post('/', createPost)

// get all posts 
router.get('/',getAllPosts)

// get one post
router.get('/:id', getOnePost)

// update one post
router.put('/:id', updatePost)

// delete one post
router.delete('/:id', deletePost)

module.exports = router