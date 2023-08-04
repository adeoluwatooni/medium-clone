
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const validator = require('validator')

const userSchema = new mongoose.Schema({
  fullname: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
    unique: true
  },
  profilePicture: {
    type: String,
    default: ''
  }
})

// static method for the signup controller logic
userSchema.statics.createNewUser = async function (fullname, email, password) {

  // checking if any of the input fields are empty
  if (!fullname || !email || !password) {
    throw Error('All inputs fields are required')
  }

  // validate the email and password formats
  if (!validator.isEmail(email)) {
    throw Error("Invalid Email format, please input a valid email address")
  }
  if (!validator.isStrongPassword(password)) {
    throw Error('password not strong enough, please try another')
  }

  // to check if the email is currently in use 
  const exists = await this.findOne({ email })
  
  if (exists) {
    throw Error('This Email is already in use, please try another')
  }

  // checking and encrypting user password for security
  const salt = await bcrypt.genSalt(10)
  const hashedPassword = await bcrypt.hash(password, salt)
  
  const user = await this.create({ fullname,email, password: hashedPassword })
  return user
}


// static method for the log in controller
userSchema.statics.loginUser = async function (email, password) {
  // checking that the fields are not empty
  if (!email) {
    throw Error('Please enter your email address')
  } else if (!password) {
    throw Error ('please enter your password ')
  }

  // check if email exists in database
  const user = await this.findOne({ email })

  if (!user) {
    throw Error('incorrect Email')
  }

  // check if inputed password matches the password 
  const passwordMatch = await bcrypt.compare(password, user.password)

  if (!passwordMatch) {
    throw Error ("Incorrect Password ")
  } 

  return user
}



module.exports = mongoose.model('User', userSchema)