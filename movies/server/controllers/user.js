var User = require('./../models/user');

module.exports.register = (req, res) => {
	let data = {...req.body}
	res.json({msg: 'user registered', data})
}

module.exports.login = (req, res) => {
	let data = {...req.body}
	res.json({msg: 'user login', data})
}

module.exports.search = (req, res) => {
	let data = {...req.body}
}

module.exports.save = (req, res) => {
	User.findOne({
		userid: 'asd'
	}, (err, user) => {
		if (err) return res.json(err)
		if (user) return res.json({msg: 'user found', user: user})
		let newUser = new User({
			userid: 'asd',
			email: 'at@at.at',
			hash: 's3cr3t'
		}).save(err => {
			if (err) return res.json(err)
			else return res.json({msg: 'user saved'})
		})
	})
}