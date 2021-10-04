const express = require('express')
const router = express.Router()

const PostModel = require('../models/Post')

// route get post data all
router.route('/posts').get((req, res, next) => {
  PostModel.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// route create post
router.route('/create-post').post((req, res, next) => {
  PostModel.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Edit post data
router.route('/posts/:id').get((req, res, next) => {
  PostModel.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Update post data
router.route('/posts/:id').put((req, res, next) => {
  PostModel.findByIdAndUpdate(
    req.params.id,
    {
      $set: req.body, // set new data to database
    },
    (error, data) => {
      if (error) {
        return next(error)
      } else {
        res.json(data)
        console.log('post successfully updated ')
      }
    }
  )
})

// Delete post
router.route('/posts/:id').delete((req, res, next) => {
  PostModel.findByIdAndDelete(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.status(200).json({ msg: data })
    }
  })
})

module.exports = router
