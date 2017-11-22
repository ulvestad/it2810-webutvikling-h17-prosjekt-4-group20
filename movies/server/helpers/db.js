const Movie = require('../models/movie')
const User = require('../models/user')
const util = require('./util')

/**
 * Find user
 * @param {String} username
 * @returns {Promise.<User>} user
 */
module.exports.findUser = username => User.findOne({username: username}).exec()

/**
 * Save user
 * @param {User} user
 * @returns {Promise.<User>} user
 */
module.exports.saveUser = user => new User(user).save()

/**
 * Get number of user documents
 * @returns {Number} user count
 */
module.exports.getUserCount = () => User.count({})

/**
 * Add movie to list, no duplicated
 * @param {User} user
 * @param {Movie} movie
 * @returns {Promise.<User>} user
 */
module.exports.addToMovieList = (user, movie) => {
	if (user.movielist.find(m => m.id === movie.id)) return user
	user.movielist.push(movie)
	return user.save()
}

/**
 * Remove from list if present
 * @param {User} user
 * @param {String} id
 * @returns {Promise.<User>} user
 */
module.exports.removeFromMovieList = (user, id) => {
	user.movielist = user.movielist.filter(m => m.id !== id)
  return user.save()
}

/**
 * Add search to history 
 * @param {User} user
 * @param {String} search query
 * @returns {Promise.<User>} user
 */
module.exports.addHistory = (user, searchQuery) => {
	const search = { timestamp: +new Date(), search_text: searchQuery }
	user.history.unshift(search)
	return user.save()
}

/**
 * Find Movie
 * @param {String} id
 * @returns {Promise.<Movie>} movie
 */
module.exports.findMovie = id => Movie.findOne({id: id}).exec()

/**
 * Save movie
 * @param {Movie} movie
 * @returns {Promise.<Movie>} movie
 */
module.exports.saveMovie = movie => new Movie(movie).save()

/**
 * Get number of movie documents
 * @returns {Number} movie count
 */
module.exports.getMoviesCount = () => Movie.count({})

/**
 * Save multiple movies, skip if duplicate
 * @param {Array.<Movie>} movies
 * @returns {Promise.<Movie>} saved movies
 */
module.exports.saveMultipleMovies = array => {
	return new Promise(async resolve => {
		if (!array || !array.length) return resolve([])
		let movies = []
		await Promise.all(array.map(async m => {
			if(m.poster_path != null){ //does not save movies with missing poster_path and low vote count
				await this.saveMovie(m).then(m => { movies.push(m) }).catch(e => {})
			}
		}))
		resolve(movies)
	})
}

/**
 * Get suggestions for movie titles
 * @param {String} query
 * @param {Number} n limit
 * @returns {Promise.{Array.<Movie>} movies
 */
module.exports.suggestMovie = (query, n=5) => {
	const regex = new RegExp(query, 'i')
	return Movie.find({title: regex}, {title: 1}).sort('-popularity').limit(n).exec()
}

/**
 * Search for movie by regex
 * @param {String} query
 * @param {Number} skip
 * @param {Number} limit
 * @returns {Promise.{Array.<Movie>} movies
 */
module.exports.searchMovie = (query, skip=0, limit=5) => {
	const regex = new RegExp(query, 'i')
	return Movie.find({title: regex}).sort('-popularity').skip(skip).limit(limit).exec()
}

/**
 * Get movies based on input
 * @param {String} type (popularity, release_date, vote_average, upcoming)
 * @param {Number} skip
 * @param {Number} limit
 * @returns {Promise.{Array.<Movie>} movies
 */
module.exports.getMovies = (type, skip=0,  limit=5) => {
	if (type === 'upcoming') return this.getUpcoming(skip, limit)
	else return Movie.find({vote_count: {$gt: 10}}).sort(`-${type}`).skip(skip).limit(limit).exec()
}

/**
 * Get upcoming movies, filters away by date and vote_count
 * @param {Number} skip
 * @param {Number} limit
 * @returns {Promise.{Array.<Movie>} movies
 */
module.exports.getUpcoming = (skip=0, limit=5) => {
	const maxDate = util.formatFutureDate(0)
	return Movie.find({
		release_date: { $gt: maxDate }, 
		vote_count: { $gt: 10 }
	}).sort('-release_date').skip(skip).limit(limit).exec()
}

/**
 * Delete all users, use with care
 * @returns {Promise.<Object>} mongoose remove exec
 */
module.exports.dumpUsers = () => User.remove({}).exec()

/**
 * Delete all movies, use with care
 * @returns {Promise.<Object>} mongoose remove exec
 */
module.exports.dumpMovies = () => Movie.remove({}).exec()
