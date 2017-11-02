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
module.exports.get = (req, res) => {
  let {id} = {...req.query}
  if (!id) return res.json(response.errors.lazy)

  NewMovie.find({id: id}).exec((err, movie) => {
    if (err) return res.json(response.errors.lazy)
    if (!movie) return res.json(response.errors.lazy) // todo fetch new info from tmdb
    return res.json({...response.success.lazy, data: movie})
  })
}

// todo consider if there is more than one page. or maybe not? tmdb is maybe sorting them
module.exports.search = (req, res) => {
  const {query} = {...req.body}

  const regex = new RegExp(query, 'i')
  NewMovie.find({title: regex}).exec((err, movies) => { // try regex the database
    if (movies.length > 10) return res.json({result: movies}) // if low result, check tmdb for moremovies
    tmdb.search(query, (err, moreMovies) => { // find more results
      NewMovie.insertMany(moreMovies.results, (err, x) => { // save them
        if (err) return console.log(err) // blabla
        // can do this step earlier i think...
        return res.json({result: [...moreMovies.results, ...movies]}) // send it all back to client
      })
    })
  })
}
