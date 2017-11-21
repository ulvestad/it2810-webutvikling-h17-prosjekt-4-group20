const express = require('express')
const router = express.Router()
const user = require('./user')
const movie = require('./movie')
const auth = require('./auth')

//movie.init()

router.get('/', (req, res) => res.json({msg: 'api'}))
router.get('/movies', movie.getAll)

router.post('/login', auth.login)
router.post('/register', auth.register)

router.get('/movies', movie.getAll)
router.get('/movie', movie.get)
router.post('/popularMovies', movie.getMoreOfPopular)
router.post('/upcomingMovies', movie.getMoreOfUpcoming)
router.post('/topRatedMovies', movie.getMoreOfTopRated)
router.post('/search', movie.search)
router.post('/suggestions', movie.getSuggestions)

router.use(auth.middleware)
router.get('/user', user.get)

router.post('/user/add', user.addToMovieList)
router.post('/user/remove', user.removeFromMovieList)
router.post('/user/add/history', user.addToHistory)

module.exports = router
