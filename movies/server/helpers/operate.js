// Runs purpose function and catches errors
const util = require('./util')

/* Solve purpose, a function, catches and returns success/error promise */ 
module.exports.solve = purpose => {
  return new Promise(resolve => {
    purpose()
      .then(s => resolve(success(s)))
      .catch(e => resolve(error(e)))
  })
}

/* On success */
const success = data => {
	console.log('\x1b[32m%s\x1b[0m', 'Success', util.time())
  return { success: true, result: data }
}

/* On error */
const error =  error => {
  if (error.code) error = {name: 'db', message: 'No duplicates, continue'} // catch mongoose duplicate error
  if (error.name === 'JsonWebTokenError') error = {name: 'Error', message: 'Not logged in'}
  console.log('\x1b[35m%s\x1b[0m', `error ${util.time()}::${error.name}, ${error.message}`)
  //console.log(error.stack) // prints the whole error stack
	return { success: false, error: error }
}
