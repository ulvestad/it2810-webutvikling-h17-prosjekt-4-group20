const util = require('./util')
const LOGGER = true

/**
 * Solved a function (purpose) and catches result or error
 * @param {Function} purpose
 * @returns {Promise.<Object>} success or error
 */
module.exports.solve = purpose => {
  return new Promise(resolve => {
    purpose()
      .then(s => resolve(success(s)))
      .catch(e => resolve(error(e)))
  })
}

/**
 * Called on success
 * @param {Object} data
 * @returns {<true>, <Object>} data
 */
const success = data => {
	if (LOGGER) console.log('\x1b[32m%s\x1b[0m', 'Success', util.time())
  return { success: true, result: data }
}

/**
 * Called on error
 * @param {Object} data
 * @returns {<false>, <Object>} data
 */
const error =  error => {
  if (error.code) error = {name: 'db', message: 'No duplicates, continue'} // catch mongoose duplicate error
  if (error.name === 'JsonWebTokenError') error = {name: 'Error', message: 'Not logged in'}
  if (LOGGER) console.log('\x1b[35m%s\x1b[0m', `error ${util.time()}::${error.name}, ${error.message}`)
  //console.log(error.stack) // prints the whole error stack
	return { success: false, error: error }
}
