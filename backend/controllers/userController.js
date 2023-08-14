
const userModel = require('../models/userModel')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const mongoose = require('mongoose')

const createUserToken = (_id) => {
  return jwt.sign({_id}, process.env.SECRET, {expiresIn : '60d'})
}

// Sign Up User <------------------------------------------------------>
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

// Log in User <------------------------------------------------------>
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

// Delete User <------------------------------------------------------>
const deleteAccount = async (req, res) => {
  const { id } = req.params
  const { password } = req.body

  // confirm the id is a valid mongoose id
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: "Invalid ID, User Not Found"})
  }

  try {
    // finding the user
    const user = await userModel.findById(id)

    if (!user) {
      return res.status(400).json({ mssg: 'User not found' })
    }

    // ask user to input their password
    if (!password) {
      return res.status(400).json({ mssg: 'Please enter your password to delete your Account' })
    }

    // check if password matches
    const passwordMatch = await bcrypt.compare(password, user.password)

    if (!passwordMatch) {
      return res.status(400).json({ mssg: 'Please enter the correct password' })
    }

    await userModel.findByIdAndDelete(id);

    res.status(200).json({ mssg: 'User Account successfully deleted' })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

// Update User <------------------------------------------------------>
const updateUser = async (req, res) => {
  const { id } = req.params
  const update = req.body
  
  // confirming the id is a vali mongoose id
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: "Invalid ID, User Not Found"})
  }

  try {
    // finding the user
    const user = await userModel.findById(id);

    if (!user) {
      return res.status(400).json({ mssg: 'User not found' })
    }

    await userModel.findByIdAndUpdate(id, update)

    res.status(200).json(update)
  } catch (error) {
    res.status(500).json({error:error.message})
  }
}



module.exports = { signup, login, updateUser, deleteAccount }