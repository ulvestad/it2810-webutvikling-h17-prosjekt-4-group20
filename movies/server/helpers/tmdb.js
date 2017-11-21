// wrap for tmdb as promise
const request = require('request')
require('dotenv').config()

const POPULAR = 'popular'
const LATEST = 'upcoming'
const TOP_RATED = 'top_rated'

const BASE = "https://api.themoviedb.org/3/";
const KEY = '?api_key=' + process.env.TMDB_KEY
const IMAGES_URI = "http://image.tmdb.org/t/p";

/* Top/latest/popular url */
const staticURL = (type, page=0) => `${BASE}movie/${type}${KEY}&language=en-US&page=${page+1}`
/* Search url */
const searchURL = (query, page=0) => `${BASE}search/movie${KEY}&query=${query}&page=${page+1}`
/* Genre url */
const genreURL = () => `${BASE}genre/movie/list${KEY}&language=en-US'`
/* Find movie info url */
const findURL = id => `${BASE}movie/${id}${KEY}`

/* GET request, promise return result */
const get = url => {
	console.log(url)
	return new Promise((resolve, reject) => {
		request.get(url, (err, res, body) => {
			if (err || !body) return reject('Found nothing')
			const result = JSON.parse(body)
			if (result.results) resolve(result.results)
			else resolve(result)
		})
	})
}

/* Get movies, returns promise */
/* popular :: upcoming :: top_rated */
module.exports.getMovies = (type, page) => get(staticURL(type, page))

/* Get genres, returns promise */
module.exports.getGenres = () => get(genreURL())

// do tmdb sort the list returned?
module.exports.search = (query, page) => get(searchURL(query, page))

/* Get extended movie info by id */
module.exports.find = id => get(findURL(id))
