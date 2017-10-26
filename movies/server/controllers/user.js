const User = require('./../models/user')

module.exports.errors = {
	noUserid: 'err, no userid',
	noEmail: 'err, no email',
	noPassword: 'err, no password',
	database: 'err, database',
	userExists: 'err, user exists',
	wrongPassword: 'err, wrong password',
	noUser: 'err, no user found',
	noToken: 'err, no token',
	wrongToken: 'err, wrong token'
}

module.exports.success = {
	userRegistered: 'success, user registered',
	loggedIn: 'success, user logged in',
	correctToken: 'success, correct token'
}

/* Register */
module.exports.register = (req, res) => {
	let userid, email, password
	({userid, email, password} = {...req.body})

	if (!userid) return res.json({ msg: this.errors.noUserid })
	if (!email) return res.json({ msg: this.errors.noEmail })
	if (!password) return res.json({ msg: this.errors.noPassword })

	User.findOne({
		userid: userid
	}, (err, user) => {
		if (err) return res.json({ msg: this.errors.database })
		if (user) return res.json({ msg: this.errors.userExists })
		const hash = password + '-hashed!'// HASH PASSWORD
		let newUser = new User({userid, email, hash}).save(err => {
			if (err) return res.json({ msg: this.errors.database })
			else return res.json({ msg: this.success.userRegistered })
		})
	})
}

/* Login */
module.exports.login = (req, res) => {
	let userid, password
	({userid, password} = {...req.body})

	if (!userid) return res.json({ msg: this.errors.noUserid })
	if (!password) return res.json({ msg: this.errors.noPassword })

	User.findOne({
		userid: userid
	}, (err, user) => {
		if (err) return res.json({msg: this.errors.database })
		if (!user) return res.json({msg: this.errors.noUser })
		if (user.hash !== (password + '-hashed!')) res.json({ msg: this.errors.wrongPassword })
		else {
			var token = 's3cr3t' // Create token. jwt.sign()
			return res.json({ msg: this.success.loggedIn, token: token, userid: userid })
		}
	})
}

/* Middleware */
module.exports.middleware = (req, res, next) => {
	let token
	({token} = {...req.body})
	if (!token) return res.json({msg: this.errors.noToken})
	if (token === 's3cr3t') next()
	else return res.json({msg: this.errors.wrongToken })
}

/* Get user info, rather be decoded from middleware */
module.exports.get = (req, res) => {
	res.json({ msg: this.success.correctToken })
}
