const mongoose = require('mongoose')
const User = require('../models/user')
const Movie = require('../models/movie')
const jwt = require('jsonwebtoken')
const config = require('../config')
const bcrypt = require('bcrypt')
const response = require('../response')
const wrapper = require('./wrapper')

/* Get user info, rather be decoded from middleware */
module.exports.get = (req, res) => {
  res.json({ ...response.success.correctToken, user: req.user })
}

/* Add a movie to the list, unique elements */
module.exports.addToMovieList = (req, res) => {
  let {id, username} = {...req.body, ...req.user.data}
  if (!id || !username) return res.json(response.errors.lazy) // missing data

  Movie.findOne({
    id: id
  }, (err, movie) => {
    if (err) return res.json(response.errors.lazy) // no movie
    User.findOne({
      username: username
    }, (err, user) => {
      if (err) return res.json(response.errors.lazy) // no user
      if (user.movielist.find(m => m.id === id)) return res.json(response.errors.lazy) // already in list
      user.movielist.push({...movie}) // add element
      user.save() // save user
      wrapper.createToken(user, (err, token) => { // create new token
        if (err) return res.json(response.errors.crypto) // error in jwt
        console.log('add', user.movielist)
        return res.json({...response.success.correctToken, token: token}) // return new token
      })
    })
  })
}

/* Removes a movie from the list */
module.exports.removeFromMovieList = (req, res) => {
  let {id, username} = {...req.body, ...req.user.data}
  if (!id || !username) return res.json(response.errors.lazy) // missing data

  User.findOne({
    username: username
  }, (err, user) => {
    if (err) return res.json(this.errors.lazy) // no user
    user.movielist = user.movielist.filter(m => m.id !== id) // remove the element
    user.save() // save
    wrapper.createToken(user, (err, token) => { // create new token
      if (err) return res.json(response.errors.crypto) // error in jwt
      console.log('del', user.movielist)
      return res.json({...response.success.correctToken, token: token}) // return new token
    })
  })
}
