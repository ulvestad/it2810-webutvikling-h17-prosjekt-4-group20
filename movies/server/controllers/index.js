const express = require('express')
const router = express.Router()
const user = require('./user')
const movie = require('./movie')

router.get('/', (req, res) => res.json({msg: 'api'}))

router.post('/login', user.login)
router.post('/register', user.register)

router.get('/test', user.save)

router.get('/movies', movie.getAll)

module.exports = router