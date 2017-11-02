const Movie = require('../models/movie')
const NewMovie =require('../models/newMovie')
const Link = require('../models/link')
const tmdb = require('./tmdb')
const response = require('../response')

/* Get all movie elements */
// remove I guess
module.exports.getAll = (req, res) => {
  Movie.find({}).limit(10).exec((err, movies) => {
    if (err) return res.json(response.errors.lazy)
    return res.json({...response.success.lazy, data: movies})
  })
}

/* Lazy loads more movies from all */
// change to query get more
module.exports.getMore = (req, res) => {
  let next = req.body.nextNumber
  if (!next) return res.json(response.errors.lazy)

  Movie.find({}).skip(10 * next).limit(10).exec((err, movies) => {
    if (err) return res.json(response.errors.lazy)
    return res.json({...response.success.lazy, data: movies})
  })
}

/* Get movie from database*/

// todo change name. movieId -> movieid
module.exports.get = (req, res) => {
  let movieId = req.query.movieId
  let {title, username} = {...req.query}
  console.log(title)

  if (!movieId && !title) return res.json(response.errors.lazy)

  // Se om den finnes i NewMovie
  // if true send det objektet
  // if false må fetche ny data og lagre det og sende til client

  NewMovie.find({

  })

  Link.findOne({
    movieId: movieId
  }, (err, link) => {
    if (err) console.error(err)
    if (!link) return console.error(link,this.errors.noMovie)

    tmdb.get(link['tmdbId'], (err, movieDetails) => {
      response.data = movieDetails
      res.json(response)
    })
  })
}

// todo if there is more than one page
// need to fetch everything

module.exports.search = (req, res) => {
  const {query} = {...req.body}

  let result = []

  const regex = new RegExp(query, 'i')
  NewMovie.find({title: regex}).exec((err, movies) => { // try regex the database
    if (movies.length > 10) return res.json({result: movies}) // if low result, check tmdb for moremovies
    tmdb.search(query, (err, moremovies) => {
      saveMany(moremovies.results, (err, x) => {
        if (err) return console.log(err)
        return res.json({result: [...moremovies.results, ...movies]}) // send it all
      })
    })
  })

  /* Add this aswell
  var regex = new RegExp(query, 'i')
  Movie.find({title: regex}, { 'title': 1 }).limit(20).exec((err, movies) => {
    res.json({result: movies})
  })
  */
}


const saveMany = (array, callback) => NewMovie.insertMany(array, callback)
const find = (id, callback) => NewMovie.find({id: id}, callback)
const save = (data, callback) => new NewMovie(data).save(callback)
