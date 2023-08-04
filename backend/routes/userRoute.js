
const express = require('express')
const router = express.Router()

//importing controllers
const {signup,login,deleteAccount} = require('../controllers/userController')

// Creating a sign up route
router.post('/signup', signup)

// Creating a log in route
router.post('/login', login)

// Delete User Account
router.delete('/settings/:id', deleteAccount)

module.exports = router