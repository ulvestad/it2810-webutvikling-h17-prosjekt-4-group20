// wrap for db with promise
const Movie = require('../models/movie')
const User = require('../models/user')
const util = require('./util')

/*
* User
*/

/* Find user, return user prmoise */
module.exports.findUser = username => User.findOne({username: username}).exec()

/* Save user, return user promise */
module.exports.saveUser = user => new User(user).save()

/* Returns the number of user documents */
module.exports.getUserCount = () => User.count({})

/* Add movie to list, no duplicated, returns user promise */
module.exports.addToMovieList = (user, movie) => {
	if (user.movielist.find(m => m.id === movie.id)) return user
	user.movielist.push(movie)
	return user.save()
}

/* Remove from list if present, returns user promise */
module.exports.removeFromMovieList = (user, id) => {
	user.movielist = user.movielist.filter(m => m.id !== id)
  return user.save()
}

/* Add search to history */
module.exports.addHistory = (user, searchQuery) => {
	const search = { timestamp: +new Date(), search_text: searchQuery }
	user.history.unshift(search)
	return user.save()
}

/*
* Movie
*/

/* Find movie, return movie promise */
module.exports.findMovie = id => Movie.findOne({id: id}).exec()

/* Save movie, return movie promise */
module.exports.saveMovie = movie => new Movie(movie).save()

/* Returns the number of movie docments */
module.exports.getMoviesCount = () => Movie.count({})

/* Save multiple, skip if duplicate */
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

/* Suggest movies.titles by regex, returns movies.title promise*/
module.exports.suggestMovie = (query, n=5) => {
	const regex = new RegExp(query, 'i')
	return Movie.find({title: regex}, {title: 1}).sort('-popularity').limit(n).exec()
}

/* Search for movie by regex, returns movies promise */
module.exports.searchMovie = (query, skip=0, limit=5) => {
	const regex = new RegExp(query, 'i')
	return Movie.find({title: regex}).sort('-popularity').skip(skip).limit(limit).exec()
}

/* Get movies, returns promise */
/* popularity :: release_date :: vote_average */
module.exports.getMovies = (type, skip=0,  limit=5) => {
	if (type === 'upcoming') return this.getUpcoming(skip, limit)
	else return Movie.find({vote_count: {$gt: 10}}).sort(`-${type}`).skip(skip).limit(limit).exec()
}

/* Get upcoming movies */
module.exports.getUpcoming = (skip=0, limit=5) => {
	const maxDate = util.formatFutureDate(0)
	return Movie.find({
		release_date: { $gt: maxDate }, 
		vote_count: { $gt: 10 }
	}).sort('-release_date').skip(skip).limit(limit).exec()
}

/*
* Admin uuu <3
*/

module.exports.dumpUsers = () => User.remove({}).exec()

module.exports.dumpMovies = () => Movie.remove({}).exec()
