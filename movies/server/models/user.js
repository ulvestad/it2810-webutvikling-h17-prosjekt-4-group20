'use strict'
const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

/* User schema */
module.exports = mongoose.model('User', new Schema({
  username: {
    type: String,
    unique: true,
    trim: true,
    required: true
  },
  email: {
    type: String,
    trim: true,
    unique: true,
    required: true
  },
  hash: {
    type: String,
    required: true
  },
  movielist: [{
    id: Number,
    title: String,
    release_date: String,
    poster_path: String
  }],
  history: [{
    timestamp: String,
    search_text: String
  }]
}))
