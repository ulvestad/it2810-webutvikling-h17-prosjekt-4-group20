const mongoose = require('mongoose')
const User = mongoose.model('User')
const jwt = require('jsonwebtoken')
const config = require('../config')
const bcrypt = require('bcrypt')

/* Error messages */
module.exports.errors = {
	noUserid: 		{ success: false, msg: 'err, no userid'},
	noEmail: 			{ success: false, msg: 'err, no email'},
	noPassword: 	{ success: false, msg: 'err, no password'},
	database: 		{ success: false, msg: 'err, database'},
	crypto: 			{ success: false, msg: 'err, crypto'},
	userExists: 	{ success: false, msg: 'err, user exists'},
	wrongPassword:{ success: false, msg: 'err, wrong password'},
	noUser: 			{ success: false, msg: 'err, no user found'},
	noToken: 			{ success: false, msg: 'err, no token'},
	wrongToken: 	{ success: false, msg: 'err, wrong token'}
}
/* Success messages */
module.exports.success = {
	userRegistered: { success: true, msg: 'success, user registered'},
	loggedIn: 			{ success: true, msg: 'success, user logged in'},
	correctToken: 	{ success: true, msg: 'success, correct token'}
}

/* Register */
module.exports.register = (req, res) => {
	let userid, email, password
	({userid, email, password} = {...req.body})

	if (!userid) return res.json({  ...this.errors.noUserid })
	if (!email) return res.json({  ...this.errors.noEmail })
	if (!password) return res.json({  ...this.errors.noPassword })

	User.findOne({
		userid: userid
	}, (err, user) => {
		if (err) return res.json({  ...this.errors.database }) // error in database
		if (user) return res.json({  ...this.errors.userExists }) // user exist
		const hash = bcrypt.hash(password, 10, (err, hash) => { // Hash & Salt
			if (err) return res.json({  ...this.errors.crypto}) // crypto error
			let newUser = new User({userid, email, hash}).save(err => { // create new user
				if (err) return res.json({  ...this.errors.database }) // error in database
				else return res.json({  ...this.success.userRegistered }) // user registered
			})
		}) // hash password
	})
}

/* Login */
module.exports.login = (req, res) => {
	let userid, password
	({userid, password} = {...req.body})

	if (!userid) return res.json({  ...this.errors.noUserid })
	if (!password) return res.json({  ...this.errors.noPassword })

	User.findOne({ // find user
		userid: userid
	}, (err, user) => {
		if (err) return res.json({ ...this.errors.database }) // error in database
		if (!user) return res.json({ ...this.errors.noUser }) // no user found
		user.comparePasswords(password, user.hash, (err, result) => { // check if password is correct
			if (err) res.json({  ...this.errors.crypto }) // error in crypto
			if (!result) res.json({  ...this.errors.wrongPassword }) // wrong password
			else { // correct password
				// TODO put in list saved in user object
				// TODO add expire on token + update the expire date in middleware when doing stuff
				jwt.sign({userid}, config.secret, /*{ algorithm: 'RS256'} ,*/ (err, token) => { // create token
					if (err) return res.json({  ...this.error.crypto }) // error in jwt
					return res.json({  ...this.success.loggedIn, token: token, userid: userid }) // user logged in
				})
			}
		})
	})
}

/* Middleware */
module.exports.middleware = (req, res, next) => {
	let token
	({token} = {...req.body})
	if (!token) return res.json({ ...this.errors.noToken }) // no token
	jwt.verify(token.split(' ')[0], config.secret, (err, decode) => { // decode token
		if (err) return res.json({ ...this.errors.wrongToken }) // wrong token
		req.user = decode // apply token to request so the next route can use it
		next() // continue the request
	})
}

/* Get user info, rather be decoded from middleware */
module.exports.getUser = (req, res) => {
	res.json({  ...this.success.correctToken, user: req.user })
}

// TODO
module.exports.getMovieList = () => {}
module.exports.addToMovieList = () => {}
module.exports.removeFromMovieList = () => {}

// Change password?
// Reset password?

