const mongoose = require('mongoose')
const User = require('../models/user')
const NewMovie = require('../models/newMovie')
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
  if (!id || !username) return res.json(response.errors.missing) // missing data
  NewMovie.find({}, (err, movies) => {
    NewMovie.findOne({
      id: id
    }, (err, movie) => {
      if (err) return res.json(response.errors.database) // err
      if (!movie) return res.json(response.errors.noMovie) // No movie found
      User.findOne({
        username: username
      }, (err, user) => {
        if (err) return res.json(response.errors.database) //err
        if (!user) return res.json(response.errors.noUser) // no user
        if (user.movielist.find(m => m.id === id)) return res.json(response.errors.exists) // already in list
        const m = {id: movie.id, title: movie.title, poster_path: movie.poster_path}
        user.movielist.push(m) // add element
        user.save() // save user
        wrapper.createToken(user, (err, token) => { // create new token
          if (err) return res.json(response.errors.crypto) // error in jwt
          return res.json({...response.success.success, token: token}) // return new token
        })
      })
    })
  })
}

/* Removes a movie from the list */
module.exports.removeFromMovieList = (req, res) => {
  let {id, username} = {...req.body, ...req.user.data}
  if (!id || !username) return res.json(response.errors.missing) // missing data

  User.findOne({
    username: username
  }, (err, user) => {
    if (err) return res.json(response.errors.database) // err
    if (!user) return res.json(response.errors.noUser) // no user
    user.movielist = user.movielist.filter(m => m.id !== id) // remove the element
    user.save() // save
    wrapper.createToken(user, (err, token) => { // create new token
      if (err) return res.json(response.errors.crypto) // error in jwt
      return res.json({...response.success.success, token: token}) // return new token
    })
  })
}


/* Add a search to history*/
module.exports.addToHistory = (req, res) => {
  //console.log('go to user controller')
  let {query, username} = {...req.body, ...req.user.data}
  if (!query || !username) return res.json(response.errors.missing) // missing data
  User.findOne({
    username: username
  }, (err, user) => {
    if (err) return res.json(response.errors.database) //err
    if (!user) return res.json(response.errors.noUser) // no user
    const s = {timestamp: new Date().toLocaleString() , search_text: query}
    user.history.unshift(s) // add element to beginning
    user.save() // save user
    wrapper.createToken(user, (err, token) => { // create new token
      if (err) return res.json(response.errors.crypto) // error in jwt
      return res.json({...response.success.success, token: token}) // return new token
    })
  })
}
