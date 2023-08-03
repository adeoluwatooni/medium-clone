
const express = require('express')
const router = express.Router()

//importing controllers
const {signup,login} = require('../controllers/userController')

// Creating a sign up route
router.post('/signup', signup)

// Creating a log in route
router.post('/login', login)

module.exports = router