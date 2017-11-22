const operate = require('../helpers/operate')
const crypto = require('../helpers/crypto')
const db = require('../helpers/db')

/**
 * Get user info
 * @params {String} req.body.username
 * @returns {User} user
 */
module.exports.get = (req, res) => {
  operate.solve(async () => {
    const user = await db.findUser(req.username) // find user
    return {username: user.username, email: user.email, movielist: user.movielist, history: user.history}
  }).then(result => res.json(result))
}

/**
 * Add movie to movielist, no duplicates
 * @params {String} req.body.id
 * @params {String} req.username
 * @returns {Array.<Movie>} movies, updated list
 */
module.exports.addToMovieList = (req, res) => {
  operate.solve(async () => {
    const {id, username} = {...req.body, ...req}
    const movie = await db.findMovie(id) // find movie
    let user = await db.findUser(username) // find user
    user = await db.addToMovieList(user, movie) // add movie to users list
    return user.movielist // return updated list
  }).then(result => res.json(result))
}

/**
 * Remove movie from movielist if found
 * @params {String} req.body.id
 * @params {String} req.username
 * @returns {Array.<Movie>} movies, updated list
 */
module.exports.removeFromMovieList = async (req, res) => {
  operate.solve(async () => {
    let {id, username} = {...req.body, ...req}
    let user = await db.findUser(username) // find user
    user = await db.removeFromMovieList(user, id) // remove movie from users list
    return user.movielist // return updated list
  }).then(result => res.json(result))
}

/* Add search to history, returns history */
/**
 * Add search to history
 * @params {String} req.body.id
 * @params {String} req.username
 * @returns {Array.<Movie>} movies, updated list
 */
module.exports.addToHistory = async (req, res) => {
  operate.solve(async () => {
    let {searchQuery, username} = {...req.body, ...req}
    let user = await db.findUser(username) // find user
    user = await db.addHistory(user, searchQuery) // add history to users list
    return user.history // return new list
  }).then(result => res.json(result))
}
