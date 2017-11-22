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
/* Dump url */
const dumpURL = date => `http://files.tmdb.org/p/exports/movie_ids_${util.formatDate(date)}` 

/**
 * Send GET request, ignore on test env
 * @param {String} url
 * @returns {Promise.<JSON>} result
 */
const get = url => {
	if (process.env.NODE_ENV === 'test') return // Do not download if in test env
	return new Promise((resolve, reject) => {
		request.get(url, (err, res, body) => {
			if (err || !body) return reject('Found nothing')
			const result = JSON.parse(body)
			if (result.results) resolve(result.results)
			else resolve(result)
		})
	})
}

/**
 * Get movies by type
 * @param {String} type (popular, upcoming, top_rated)
 * @param {Number} page
 * @returns {Promise.<Array.<Movies>>} result
 */
module.exports.getMovies = (type, page) => get(staticURL(type, page))

/**
 * Get genres
 * @returns {Promise.<Array.<String>>} result
 */
module.exports.getGenres = () => get(genreURL())

/**
 * Get movies with search query
 * @param {String} query
 * @param {Number} page
 * @returns {Promise.<Array.<Movies>>} result
 */
module.exports.search = (query, page) => get(searchURL(query, page))

/**
 * Get extended movie detail
 * @param {String} id 
 * @returns {Promise.<Movie>} movie
 */
module.exports.find = id => get(findURL(id))
