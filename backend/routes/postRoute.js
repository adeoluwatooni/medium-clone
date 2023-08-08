const express = require('express')
const {createPost} = require('../controllers/postController')


const router = express.Router()

// create an article
router.post('/', createPost)

// get all articles 
router.get('/',(req, res) => {
  res.json({mssg:'request to GET ALL'})
})

// get one article
router.get('/:id', (req, res) => {
  res.json({mssg: 'request to GET ONE'})
})

// update one article
router.put('/:id', (req, res) => {
  res.json({mssg: 'request to UPDATE ONE'})
})

// delete one article
router.delete('/:id', (req, res) => {
  res.json({mssg: 'request to DELETE ONE'})
})

module.exports = router