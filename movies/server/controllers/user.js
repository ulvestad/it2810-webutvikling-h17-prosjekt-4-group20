const operate = require('../helpers/operate')
const crypto = require('../helpers/crypto')
const db = require('../helpers/db')

/* Get user info */
module.exports.get = (req, res) => {
  operate.solve(async () => {
    const user = await db.findUser(req.username)
    // spread funker faen ikke...
    return {username: user.username, email: user.email, movielist: user.movielist, history: user.history}
  }).then(result => res.json(result))
}

/* Add movie to movielist, no duplicates, returns movielist */
module.exports.addToMovieList = (req, res) => {
  operate.solve(async () => {
    const {id, username} = {...req.body, ...req}
    const movie = await db.findMovie(id)
    let user = await db.findUser(username)
    user = await db.addToMovieList(user, movie)
    return user.movielist
  }).then(result => res.json(result))
}

/* Remove movie from movielist if found, returns movielist*/
module.exports.removeFromMovieList = async (req, res) => {
  operate.solve(async () => {
    let {id, username} = {...req.body, ...req}
    let user = await db.findUser(username)
    user = await db.removeFromMovieList(user, id)
    return user.movielist
  }).then(result => res.json(result))
}

/* Add search to history, returns history */
module.exports.addToHistory = async (req, res) => {
  operate.solve(async () => {
    let {searchQuery, username} = {...req.body, ...req}
    let user = await db.findUser(username)
    user = await db.addHistory(user, searchQuery)
    return user.history
  }).then(result => res.json(result))
}
