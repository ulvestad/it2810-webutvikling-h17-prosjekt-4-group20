var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

module.exports = mongoose.model('Link', new Schema({
    movieId: Number,
    imdbId: String,
    tmdbId: String,
}));
