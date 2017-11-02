'use strict'
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const Schema = mongoose.Schema

/* User schema */
let UserSchema = new Schema({
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
    id: String,
    title: String
  }]
})

mongoose.model('User', UserSchema)


