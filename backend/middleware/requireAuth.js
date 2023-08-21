

const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')

const userModel = require('../models/userModel')

// configure dotenv
dotenv.config()


const requireAuth = async (req, res, next) => {
  // verify if the user is authorized
  const { authorization } = req.headers

  if (!authorization) {
    return res.status(401).json({error: 'Authorization token required'})
  }

  const token = authorization.split(' ')[1]

  try {
    const { _id } = jwt.verify(token, process.env.SECRET)

    req.user = await userModel.findOne({ _id }).select('_id') // to find the user who is logged in by vefifying the token

    next()
  } catch (error) {
    console.log(error)

    return res.json(401).json({error:'Request is not authorized'})
  }
}

module.exports = requireAuth
