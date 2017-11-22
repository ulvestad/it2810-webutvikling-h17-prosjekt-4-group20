const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const SALT_ROUNDS = 10

/**
 * Creates a new token with env secret, and expire date of one week 
 * @param {String} data
 * @returns {String} token
 */
module.exports.createToken = data => {
	return jwt.sign({data: data, exp: Math.floor(Date.now() / 1000) + (60 * 60 * 24 * 7)}, process.env.TOKEN_SECRET)
}

/**
 * Decode token with env secret
 * @param {String} token
 * @returns {String} decoded token
 */
module.exports.decodeToken = token => jwt.verify(token.split(' ')[0], process.env.TOKEN_SECRET)

/**
 * Compare password with hash
 * @param {String} password
 * @param {String} user
 * @returns {Promise.<boolean>} if correct
 */
module.exports.comparePassword = (password, hash) => bcrypt.compare(password, hash)

/**
 * Hash and salt password
 * @param {String} password
 * @returns {Promise.<string>} hash
 */
module.exports.hash = password => bcrypt.hash(password, SALT_ROUNDS)
