const express = require('express')
const router = express.Router()
const user = require('./user')
const movie = require('./movie')

router.get('/', (req, res) => res.json({msg: 'api'}))
router.get('/movies', movie.getAll)

router.post('/login', user.login)
router.post('/register', user.register)

router.get('/movies', movie.getAll)
router.get('/movie', movie.get)
router.post('/lazyMovies', movie.getMore)
router.post('/search', movie.search)

router.use(user.middleware)
router.get('/user', user.get)

router.post('/user/add', user.addToMovieList)
router.post('/user/remove', user.removeFromMovieList)

module.exports = router
