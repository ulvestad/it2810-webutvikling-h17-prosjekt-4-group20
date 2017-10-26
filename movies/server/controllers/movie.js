var Movie = require('./../models/movie');

let response = {
    status: 200,
    data: [],
    message: null
};

module.exports.getAll = (req, res) => {
    Movie.find({}, (err, movies) => {
        if (err) return console.error('err:', err);
        response.data = movies;
        res.json(response);
    })

    console.log('getting movies')
    
  
}