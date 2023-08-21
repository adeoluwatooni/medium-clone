const express = require('express')
const { createPost, getAllPosts, getOnePost, deletePost, updatePost, createComment } = require('../controllers/postController')

// adding the custom authentication middleware
const requireAuth = require('../middleware/requireAuth')

const router = express.Router()



// create a post
router.post('/', requireAuth, createPost)

// create a comment
router.post('/:id/comment', requireAuth, createComment)

// get all posts 
router.get('/',getAllPosts)

// get one post
router.get('/:id', getOnePost)

// update one post
router.put('/:id', requireAuth, updatePost)

// delete one post
router.delete('/:id', requireAuth,  deletePost)


module.exports = router