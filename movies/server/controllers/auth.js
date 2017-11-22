const operate = require('../helpers/operate')
const crypto = require('../helpers/crypto')
const db = require('../helpers/db')

/**
 * Register new user
 * @param {String} req.body.username
 * @param {String} req.body.email
 * @param {String} req.body.password
 * @param {String} req.body.confirm
 * @returns {Object.{<Boolean>.<String>}} success, username
 */
module.exports.register = (req, res) => {
  req.assert('username', 'Username is not valid').notEmpty()
  req.assert('email', 'Email is not valid').isEmail()
  req.assert('password', 'Password must be at least 8 characters long').len(8)
  req.assert('confirm', 'Passwords do not match').equals(req.body.password)
  const errors = req.validationErrors()

  operate.solve(async () => {
    if (errors) throw new Error(errors)
    const {username, email, password} = {...req.body}
    const hash = await crypto.hash(password) // hash password
    const newUser = await db.saveUser({ username, email, hash}) // save user
    return newUser.username
  }).then(result => res.json(result))
}

/**
 * Register new user
 * @param {String} req.body.username
 * @param {String} req.body.password
 * @returns {Object.{<Boolean>.<String>}} success, token
 */
module.exports.login = (req, res) => {
  req.assert('username', 'Username is not valid').notEmpty()
  req.assert('password', 'Password cannot be blank').notEmpty()
  const errors = req.validationErrors()

  operate.solve(async () => {
    if (errors) throw new Error(errors)
    const {username, email, password} = {...req.body}
    const user = await db.findUser(username) // find user
    const bool = await crypto.comparePassword(password, user.hash) // compare passwords
    if (!bool) throw new Error('Wrong password')
    const token = await crypto.createToken(username) // create token
    return token
  }).then(result => res.json(result))
}

/**
 * Logout 
 */
module.exports.logout = (req, res) => {

}

/**
 * Middleware to check if correct token
 * @param {String} req.body.token
 * @param {String} req.params.token
 * @returns {Object.{<Boolean>.<String>}} error message
 */
module.exports.middleware = (req, res, next) => {
  operate.solve(async () => {
    const token = req.get('token') || req.body.token
    if (!token) throw new Error('Not logged in 1')
    const decode = crypto.decodeToken(token) // decode token
    req.username = decode.data // set username for next routes to use
    return
  }).then(result => {
    if (result.success) next() // continue
    else res.json(result) // return deny
  })
}
