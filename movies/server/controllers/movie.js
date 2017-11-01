var Movie = require('../models/movie');
var Link = require('../models/link');
var tmdb = require('./tmdb');

let response = {
    status: 200,
    data: [],
    message: null
};

module.exports.errors = {
    noMovieId: 'err, no movieId',
    noMovie: 'err, no movie found',
	database: 'err, database',
	noToken: 'err, no token',
	wrongToken: 'err, wrong token'
}

module.exports.getAll = (req, res) => {
  Movie.find({}).limit(10).exec((err, movies) => {
    if (err) return console.error('err:', err);
    response.data = movies;
    res.json(response);
  })
}

module.exports.getMore = (req, res) => {
  let next = req.body.nextNumber;
  Movie.find({}).skip(10 * next).limit(10).exec((err, movies) => {
    if (err) return console.error('err:', err);
    response.data = movies;
    res.json(response);
  })
}

module.exports.get = (req, res) => {
    let movieId = req.query.movieId;

    if (!movieId) return res.json({ msg: this.errors.noMovieId });

    Link.findOne({
        movieId: movieId
    }, (err, link) => {
        if (err) console.error(err);
        if (!link) return console.error(link,this.errors.noMovie);

        tmdb.get(link['tmdbId'], (err, movieDetails) => {
            response.data = movieDetails;
            res.json(response);
        });
    });
}
