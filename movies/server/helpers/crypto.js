/* Wrapper for jwt and bcrypt */

const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const SALT_ROUNDS = 10

/* Returns token */
module.exports.createToken = data => {
	return jwt.sign({data: data, exp: Math.floor(Date.now() / 1000) + (60 * 60 * 24 * 7)}, process.env.TOKEN_SECRET)
}

/* Returns decoded token */
module.exports.decodeToken = token => jwt.verify(token.split(' ')[0], process.env.TOKEN_SECRET)

/* Compare password with hash, promise return true/false */
module.exports.comparePassword = (password, hash) => bcrypt.compare(password, hash)

/* Hash password, return promise hash/reject */
module.exports.hash = password => bcrypt.hash(password, SALT_ROUNDS)
