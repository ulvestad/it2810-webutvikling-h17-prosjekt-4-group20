const mongoose = require('mongoose')
const User = mongoose.model('User')
var Movie = require('../models/movie') // todo change movie model to same as user
const jwt = require('jsonwebtoken')
const config = require('../config')
const bcrypt = require('bcrypt')
const response = require('../response.js')

const wrapper = require('./wrapper')

/* Register */
module.exports.register = (req, res) => {
  let {username, email, password, confirm} = {...req.body}

  if (!username || !email || !password || !confirm) return res.json(response.errors.missing)

  User.findOne({
    username: username
   }, (err, user) => {
    if (err) return res.json(response.errors.database) // error in database
    if (user) return res.json(response.errors.userExists) // user exist
    const hash = bcrypt.hash(password, 10, (err, hash) => { // Hash & Salt
      if (err) return res.json(response.errors.crypto) // crypto error
      let newUser = new User({username, email, hash}).save(err => { // create new user
        if (err && err.code === 11000) return res.json(response.errors.emailExists) // email in use
        else if (err) return res.json(response.errors.database) // error in database
        else return res.json(response.success.userRegistered) // user registered
      })
    })
  })
}

/* Login */
module.exports.login = (req, res) => {
  let {username, password} = {...req.body}

  if (!username || !password) return res.json(response.errors.missing)

  User.findOne({
    username: username
  }, (err, user) => {
    if (err) return res.json(response.errors.database) // error in database
    if (!user) return res.json(response.errors.noUser) // no user found
    wrapper.comparePassword(password, user.hash, (err, result) => { // check if password is correct
      if (err) res.json(response.errors.crypto) // error in crypto
      if (!result) res.json(response.errors.wrongPassword) // wrong password
      else { // correct password
        wrapper.createToken(user, (err, token) => {
          if (err) return res.json(response.error.crypto) // error in jwt
          return res.json({...response.success.loggedIn, token: token, username: username }) // user logged in
        })
      }
    })
  })
}

/* Middleware */
module.exports.middleware = (req, res, next) => {
  let token = req.get('token') || req.body.token

  if (!token) return res.json(response.errors.noToken)// no token

  wrapper.decodeToken(token, (err, decode) => {
    if (err) return res.json(response.errors.wrongToken) // wrong token
    req.user = decode // apply token to request so the next route can use it
    next() // continue the request
  })
}