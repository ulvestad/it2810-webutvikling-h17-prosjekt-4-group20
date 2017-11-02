var mongoose = require('mongoose')
var Schema   = mongoose.Schema

module.exports = mongoose.model('Movie', new Schema({
  movieId: String,
  title: String,
  genres: String,
}))
