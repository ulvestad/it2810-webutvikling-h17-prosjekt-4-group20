const Movie = require('../models/movie')
const NewMovie = require('../models/newMovie')
const Link = require('../models/link')
const tmdb = require('./tmdb')
const response = require('../response')

/* Stores the most popular*/
module.exports.init = () => {
  tmdb.init((err, result) => {
    if (err) return console.log('ERRRO', err)
    console.log(result.length)
    saveMany(result)
  })
}

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

  NewMovie.find({}).skip(8 * next).limit(8).exec((err, movies) => {
    if (err) return res.json(response.errors.lazy)
    return res.json({...response.success.lazy, data: movies})
  })
}

module.exports.getPopular = (req, res) => {
  console.log(req.body)
  let {next} = {...req.body}
  // add error for null or undefined
  const n = 8
  NewMovie.find({}).skip(n*next).limit(n).sort('-popularity').exec((err, movies) => {
    if (err) return res.json(response.errors.database)
    return res.json({...response.success.lazy, result: movies})
  })
}

/* Get single movie from database */
module.exports.get = (req, res) => {
  let {id} = {...req.query}
  if (!id) return res.json(response.errors.missing)

  NewMovie.find({id: id}).exec((err, movie) => {
    if (err) return res.json(response.errors.database)
    if (!movie) return res.json(response.errors.noMovie) // todo fetch new info from tmdb
    return res.json({...response.success.lazy, data: movie})
  })
}

// todo consider if there is more than one page. or maybe not? tmdb is maybe sorting them
// only send a few results bsed on popularity? rating? ...
module.exports.search = (req, res) => {
  const {query} = {...req.body}
  if (!query) return res.json(response.errors.missing)
  const regex = new RegExp(query, 'i')
  NewMovie.find({title: regex}).sort('popularity').exec((err, movies) => { // try regex the database
    if (movies.length > 10) return res.json({...response.success.success, result: movies}) // if low result, check tmdb for moremovies
    tmdb.search(query, (err, moreMovies) => { // find more results
      saveMany(moreMovies.results) // save movies
      return res.json({...response.success.success, result: [...moreMovies.results, ...movies]}) // send it all back to client
    })
  })
}

/* Returns a list of suggestions based on query */
// TODO filter away duplicates
// TODO limit size of response here? .limit()
module.exports.getSuggestions = (req, res) => {
  const {query} = {...req.body}
  if (!query) return res.json(response.errors.missing)
  const regex = new RegExp(query, 'i')
  NewMovie.find({title: regex}, {title: 1}).exec((err, movies) => {
    if (err) return res.json(response.errors.lazy)
    return res.json({...response.success.lazy, result: movies})
  })
}

/* Saves all movies in array */
const saveMany = array => {
  if (!array) return console.log('empty array')
  array.map(o => {
    new NewMovie(o).save(err => {
      if (err) console.log('duplicate key, not saved', o.title)
      else console.log('saved ', o.title)
    })
  })
}
