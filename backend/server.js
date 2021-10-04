const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const database = require('./database')
const bodyParser = require('body-parser')

// Connect to Mongodb
mongoose.Promise = global.Promise
mongoose
  .connect(database.db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(
    () => {
      console.log('database connectd successfully')
    },
    (error) => {
      console.log('Cannot connect to database ' + error)
    }
  )

const userApi = require('../backend/routes/user.route')
const postApi = require('../backend/routes/post.route')
const app = express()
app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
)
app.use(cors())

// API
app.use('/api', userApi)
app.use('/api', postApi)

//  Create Port
const port = process.env.PORT || 4000
app.listen(port, () => {
  console.log('Connected to port ' + port)
})

// 404 Handler
// app.use((req, res, next) => {
//   next(createError(404))
// })

// error Handler
app.use(function (err, req, res, next) {
  console.error(err.message)
  if (!err.statusCode) err.statusCode = 500
  res.status(err.statusCode).send(err.message)
})
