
const express = require('express')
const dotenv = require('dotenv')
const mongoose = require('mongoose')

//initializing express
const app = express()

// configure dotenv
dotenv.config()

// connecting to mongoDB Atlas
mongoose.connect(process.env.MONGO_URI,)
  .then(() => {
    app.listen(process.env.PORT, () => {
    console.log('listening to backend on port', process.env.PORT)
  })
  })
  .catch((err) => {
    console.log(err)
  })

app.get('/', (req, res) => {
  res.json({mssg: 'Hello from backend'})
  console.log('testing the backend')
})


