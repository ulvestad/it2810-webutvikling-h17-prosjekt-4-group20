const mongoose = require('mongoose')
const User = mongoose.model('User')
var Movie = require('../models/movie') // todo change movie model to same as user
const jwt = require('jsonwebtoken')
const config = require('../config')
const bcrypt = require('bcrypt')

/* Error messages */
module.exports.errors = {
  noUsername:   { success: false, msg: 'no username' },
  noEmail:      { success: false, msg: 'No email' },
  noPassword:   { success: false, msg: 'No password' },
  database:     { success: false, msg: 'Databse error' },
  crypto:       { success: false, msg: 'Crypto error' },
  userExists:   { success: false, msg: 'Username taken' },
  emailExists:  { success: false, msg: 'Email address already in use'},
  wrongPassword:{ success: false, msg: 'Wrong password' },
  noUser:       { success: false, msg: 'No user found' },
  noToken:      { success: false, msg: 'No token' },
  wrongToken:   { success: false, msg: 'Wrong token' }
}

/* Success messages */
module.exports.success = {
  userRegistered: { success: true, msg: 'success, user registered' },
  loggedIn:       { success: true, msg: 'success, user logged in' },
  correctToken:   { success: true, msg: 'success, correct token' }
}

/* Register */
module.exports.register = (req, res) => {
  let {username, email, password, confirm} = {...req.body}

  if (!username) return res.json(this.errors.noUsername)
  if (!email) return res.json(this.errors.noEmail)
  if (!password) return res.json(this.errors.noPassword)

  User.findOne({
    username: username
   }, (err, user) => {
    if (err) return res.json(this.errors.database) // error in database
    if (user) return res.json(this.errors.userExists) // user exist
    const hash = bcrypt.hash(password, 10, (err, hash) => { // Hash & Salt
      if (err) return res.json(this.errors.crypto) // crypto error
      let newUser = new User({username, email, hash}).save(err => { // create new user
        if (err && err.code === 11000) return res.json(this.errors.emailExists) // email in use
        else if (err) return res.json(this.errors.database) // error in database
        else return res.json(this.success.userRegistered) // user registered
      })
    }) // hash password
  })
}

/* Login */
module.exports.login = (req, res) => {
  let {username, password} = {...req.body}

  if (!username) return res.json(this.errors.noUsername)
  if (!password) return res.json(this.errors.noPassword)

  User.findOne({ // find user
    username: username
  }, (err, user) => {
    if (err) return res.json(this.errors.database) // error in database
    if (!user) return res.json(this.errors.noUser) // no user found
    user.comparePasswords(password, user.hash, (err, result) => { // check if password is correct
      if (err) res.json(this.errors.crypto) // error in crypto
      if (!result) res.json(this.errors.wrongPassword) // wrong password
      else { // correct password
        // TODO put in list saved in user object
        // TODO add expire on token + update the expire date in middleware when doing stuff

        createToken(user, (err, token) => {
          if (err) return res.json(this.error.crypto) // error in jwt
          return res.json({...this.success.loggedIn, token: token, username: username }) // user logged in
        })
      }
    })
  })
}
/* Creates a new token, signing with secret in config */
// TODO put in list saved in user object
// TODO add expire on token + update the expire date in middleware when doing stuff
const createToken = (user, callback) => {
  jwt.sign({
    data: user,
    exp: Math.floor(Date.now() / 1000) + (60 * 60 * 24 * 7)
  }, config.secret, callback)
}


/* Middleware */
module.exports.middleware = (req, res, next) => {
  let token = req.get('token') || req.body.token
  if (!token) return res.json(this.errors.noToken)// no token

  jwt.verify(token.split(' ')[0], config.secret, (err, decode) => { // decode token
    if (err) return res.json(this.errors.wrongToken) // wrong token
    req.user = decode // apply token to request so the next route can use it
    next() // continue the request
  })
}

/* Get user info, rather be decoded from middleware */
module.exports.get = (req, res) => {
  res.json({ ...this.success.correctToken, user: req.user })
}

/* Add a movie to the list, unique elements */
// TODO use id instead of title
// TODO fix return msg
// TODO cleanup <3
// TODO write tests <3<3
module.exports.addToMovieList = (req, res) => {
  let {title, username} = {...req.body, ...req.user.data}
  if (!title || !username) return res.json({msg: 'err'}) // missing data
  // Make it faster by just adding the id string into user, skip searching for the movie.

  Movie.findOne({
    title: title // TODO change to id, or what we want to use
  }, (err, movie) => {
    if (err) return res.json({msg: 'err'}) // no movie by that title
    User.findOne({ // no username
      username: username
    }, (err, user) => {
      if (err) return res.json({msg: 'err'}) // no user
      if (user.movielist.find(id => id.equals(movie._id))) return res.json({msg: 'err'}) // already in list
      user.movielist.push(movie) // add
      user.save() // save
      createToken(user  , (err, token) => { // create new token
        if (err) return res.json(this.error.crypto) // error in jwt
        return res.json({...this.success.loggedIn, token: token}) // return new token
      })
    })
  })
}

/* Removes a movie from the list */
// TODO same as the method
module.exports.removeFromMovieList = (req, res) => {
  let {movieid, username} = {...req.body, ...req.user.data}
  if (!movieid || !username) return res.json() // missing data

  User.findOne({
    username: username
  }, (err, user) => {
    if (err) return res.json()
    user.movielist = user.movielist.filter(id => !id.equals(movieid))
    user.save()
    res.json({msg: 'success i think'})
  })
}

// Change password?
// Reset password?
