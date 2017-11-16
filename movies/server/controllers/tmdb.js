const request = require('request')
const config = require('../config')

const POPULAR = 'https://api.themoviedb.org/3/movie/popular?api_key=286704470bfa6dce467f4e5cce16d153&language=en-US&page='
const LATEST = 'https://api.themoviedb.org/3/movie/upcoming?api_key=286704470bfa6dce467f4e5cce16d153&language=en-US'
const TOP_RATED = 'https://api.themoviedb.org/3/movie/top_rated?api_key=286704470bfa6dce467f4e5cce16d153&language=en-US&page='
const GENRE_LIST = 'https://api.themoviedb.org/3/genre/movie/list?api_key=286704470bfa6dce467f4e5cce16d153&language=en-US'

const base = "https://api.themoviedb.org/3/";
const key = '?api_key=' + config.api_key
const IMAGES_URI = "http://image.tmdb.org/t/p";

/* Send get request to url,*/
const get = (url, callback) => {
	request.get(url, (err, res, body) => {
		if (err) callback(err)
		if (!body) callback('found nothing')
		// if result 401 or 404
		callback(null, JSON.parse(body))
	})
}

const getTenPages = (api) => {
	for (let i = 0; i < 10; i++) {

	}
}

// BRUKE .then() eller?

// Nå hentern bare en page fra hver, kan jo hente flere sider?
module.exports.init = callback => {
	for (let i = 1; i < 11; i++) {
		let array = []
		get(POPULAR + i, (err, result) => {
			if (err) callback(err)
			array.push(...result.results)
			get(LATEST, (err, result) => {
				if (err) callback(err)
				array.push(...result.results)
				get(TOP_RATED + i, (err, result) => {
					if (err) calback(err)
					array.push(...result.results)
					callback(null, array)
				})
			})
		})
	}
}


module.exports.searchRequest = (query, callback) => request(base + `search/movie${key}&query=${query}`, callback)

module.exports.findRequest = (id, callback) => {
	request(base + `movie/${id}${key}`, (err, res, body) => {
		if (err) return callback(err)
		callback(JSON.parse(body))
	})
}

//module.exports.get = (url, callback) => request(url, callback)

// not using
// can edit this to handle json error
const read = string => JSON.parse(string)


// todo add handler for response 401 and 404
module.exports.getInfo = (id, callback) => {
	this.findRequest(id, (err, res, body) => {
		if (err) return callback(err)
		callback(null, JSON.parse(body))
  })
}

// handler 401 404. tror de går gjennom error msg
module.exports.search = (query, callback) => {
	this.searchRequest(query, (err, res, body) => {
		if (err) return callback(err)
		callback(null, JSON.parse(body))
	})
}
/*
module.exports.init = callback => {
	let array = []
	this.get(POPULAR, (err, res, body) => {
		if (err) return callback(err)
		array.push(JSON.parse(body).results)
		this.
	})
}

*/
