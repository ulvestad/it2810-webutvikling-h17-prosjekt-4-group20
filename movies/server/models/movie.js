'use strict'
const mongoose = require('mongoose')
const Schema   = mongoose.Schema

module.exports = mongoose.model('Movie', new Schema({
	id: { type: Number, unique: true, require: true },
	title: String,
	overview: String,
	popularity: Number,
	poster_path: String,
	backdrop_path: String,
	genre_ids: [Number],
	release_date: String,
	runtime: Number,
	tagline: String,
	vote_average: Number,
	vote_count: Number,
	tag: String
}))
