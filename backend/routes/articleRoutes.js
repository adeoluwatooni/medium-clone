const express = require('express')

const router = express.Router()

// create an article
router.post('/', (req, res) => {
  res.json({mssg:'POST request'})
})