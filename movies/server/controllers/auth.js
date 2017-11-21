const operate = require('../helpers/operate')
const crypto = require('../helpers/crypto')
const db = require('../helpers/db')

/* Register */
module.exports.register = (req, res) => {
  operate.solve(async () => {
    const {username, email, password, confirm} = {...req.body}
    if (password !== confirm) throw new Error('Passwords does not match')
    const hash = await crypto.hash(password) // hash password
    const newUser = await db.saveUser({username, email, hash}) // save user
    return username
  }).then(result => res.json(result))
}

module.exports.login = (req, res) => {
  operate.solve(async () => {
    const {username, password} = {...req.body}
    const user = await db.findUser(username) // find user
    const bool = await crypto.comparePassword(password, user.hash) // compare passwords
    if (!bool) throw new Error('Wrong password')
    const token = await crypto.createToken(username) // create token
    return token
  }).then(result => res.json(result))
}

/* Logout */
module.exports.logout = (req, res) => {
  // destroy session
  // destroy token
  // redirect
}

module.exports.middleware = (req, res, next) => {
  operate.solve(async () => {
    const token = req.get('token') || req.body.token
    if (!token) throw new Error('Not logged in 1')
    const decode = crypto.decodeToken(token)
    req.username = decode.data
    return
  }).then(result => {
    if (result.success) next() // continue
    else res.json(result) // return deny
  })
}
