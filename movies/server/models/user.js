'use strict'
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const Schema = mongoose.Schema

/* User schema */
let UserSchema = new Schema({
  userid: {
  	type: String,
  	unique: true,
  	trim: true,
  	required: true
  },
  email: {
  	type: String,
  	trim: true,
  	required: true
  },
  hash: {
  	type: String,
  	required: true
  }
})

// XXX put in userschme.pre for hasing? instead of keeping it the controller?

/* Compare given password with saved hash*/
UserSchema.methods.comparePasswords = (password, hash, callback) => {
	bcrypt.compare(password, hash, callback)
}

mongoose.model('User', UserSchema)


