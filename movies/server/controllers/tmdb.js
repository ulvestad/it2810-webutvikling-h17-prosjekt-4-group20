const request = require('request')

const base = "https://api.themoviedb.org/3/";
const key = '?api_key=' + require('../config').api_key
const IMAGES_URI = "http://image.tmdb.org/t/p";

module.exports.searchRequest = (query, callback) => request(base + `search/movie${key}&query=${query}`, callback)

module.exports.findRequest = (id, callback) => request(base + `movie/${id}${key}`, callback)


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