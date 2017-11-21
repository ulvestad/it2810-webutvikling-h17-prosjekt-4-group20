// wrap for db with promise
const Movie = require('../models/newMovie')
const User = require('../models/user')
const util = require('./util')
/*
* User
*/

/* Find user, return user prmoise */
module.exports.findUser = username => User.findOne({username: username}).exec()

/* Save user, return user promise */
module.exports.saveUser = user => new User(user).save()

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

/* Save multiple, skip if duplicate */
module.exports.saveMultipleMovies = array => {
	return new Promise(async resolve => {
		if (!array || !array.length) return resolve('no data')
		let movies = []
		await Promise.all(array.map(async m => {
			if(m.poster_path != null){ //does not save movies with missing poster_path
				await this.saveMovie(m).then(m => { movies.push(m) }).catch(e => {})
			}
		}))
		resolve(movies)
	})
}

/* Suggest movies.titles by regex, returns movies.title promise*/
// Vet ikke om lista sorteres, siden jeg henter ut bare tittelen. Må sjekkes
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
	if (type === 'upcoming') return this.getUpcoming(skip, limit) // ugly finn en bedre løsning ? cmplx
	else return Movie.find({}).sort(`-${type}`).skip(skip).limit(limit).exec()
}
/* Get upcoming movies */
// todo add constraint on vote_average, popularity aswell?
module.exports.getUpcoming = (skip=0, limit=5) => {
	const max = util.formatFutureDate(10)
	// finds movies with release date below max, then sort by release date
	// can add more eg. {popularity: {$gt: 300}}
	return Movie.find({release_date: {$gt: max}}).sort('-release_date').skip(skip).limit(limit).exec()
}
