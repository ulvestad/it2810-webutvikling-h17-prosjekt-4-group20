const express = require('express')
const router = express.Router()
const user = require('./user')
const movie = require('./movie')
const auth = require('./auth')

router.get('/', (req, res) => res.json({msg: 'api'}))
router.get('/movies', movie.getAll)

router.post('/login', auth.login)
router.post('/register', auth.register)

router.get('/movies', movie.getAll)
router.get('/movie', movie.get)
router.post('/lazyMovies', movie.getMore)

router.use(auth.middleware)
router.get('/user', user.get)

router.post('/user/add', user.addToMovieList)
router.post('/user/remove', user.removeFromMovieList)

module.exports = router
