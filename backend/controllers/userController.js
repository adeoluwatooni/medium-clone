
const userModel = require('../models/userModel')
const jwt = require('jsonwebtoken')

const createUserToken = (_id) => {
  return jwt.sign({_id}, process.env.SECRET, {expiresIn : '60d'})
}

const signup = async (req, res) => {
  const { fullname, email, password } = req.body

  try {
    const user = await userModel.createNewUser(fullname, email, password)

    // create a token to send to the front end when user logs in
    const userToken = createUserToken(user._id)

    res.status(200).json({fullname, email, userToken})
  } catch (error) {
    res.status(400).json({error:error.message})
  }
}


const login = async (req, res) => {
  const { email, password } = req.body

  try {
    const user = await userModel.loginUser(email, password)

    // create a token to send to the front end when user sign in
    const userToken = createUserToken(user._id)

    res.status(200).json({email, userToken})

  } catch (error) {
    res.status(400).json(error.message)
  }
}

module.exports = { signup, login }