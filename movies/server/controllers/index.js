const express = require('express')
const router = express.Router()
const user = require('./user')
const movie = require('./movie')
const auth = require('./auth')

movie.init()

router.get('/', (req, res) => res.json({msg: 'api'}))

router.post('/login', auth.login)
router.post('/register', auth.register)


router.post('/movie', movie.get)
router.post('/genres', movie.getGenres)
router.post('/top', movie.getTopRated)
router.post('/latest', movie.getLatest)
router.post('/popular', movie.getPopular)
router.post('/upcoming', movie.getUpcoming)
router.post('/suggestions', movie.getSuggestions)
router.post('/search', movie.search)

router.use(auth.middleware)
router.get('/user', user.get)

router.post('/user/add', user.addToMovieList)
router.post('/user/remove', user.removeFromMovieList)
router.post('/user/add/history', user.addToHistory)

module.exports = router
