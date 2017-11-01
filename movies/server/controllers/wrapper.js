const mongoose = require('mongoose')
const User = mongoose.model('User')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const config = require('../config')

/* Wrapper for jwt and bcrypt */
/* Trying putting it in own file */

/* Creates a new token with user and secret */
/* callback: (error, token) */
module.exports.createToken = (user, callback) => {
  jwt.sign({
    data: user,
    exp: Math.floor(Date.now() / 1000) + (60 * 60 * 24 * 7)
  }, config.secret, callback)
}

/* Decodes token with user and secret */
/* callback: (error, user) */
module.exports.decodeToken = (token, callback) => jwt.verify(token.split(' ')[0], config.secret, callback)

/* Creates a new token with user and secret */
/* callback: (error, result) */
module.exports.comparePassword = (password, hash, callback) => bcrypt.compare(password, hash, callback)



// Sanitize
// validate