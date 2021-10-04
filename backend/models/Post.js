const mongoose = require('mongoose')
const Schema = mongoose.Schema

// model postSchema
const postSchema = new Schema(
  {
    title: {
      type: String,
    },
    description: {
      type: String,
    },
    detail: {
      type: String,
    },
    image: {
      type: String,
    },
    date: {
      type: String,
    },
    created_by: {
      type: String,
    },
  },
  {
    collection: 'posts',
  }
)

module.exports = mongoose.model('Post', postSchema)
