/* Error messages */
module.exports.errors = {
  noUsername:   { success: false, msg: 'no username' },
  noEmail:      { success: false, msg: 'No email' },
  noPassword:   { success: false, msg: 'No password' },
  database:     { success: false, msg: 'Databse error' },
  crypto:       { success: false, msg: 'Crypto error' },
  userExists:   { success: false, msg: 'Username taken' },
  emailExists:  { success: false, msg: 'Email address already in use'},
  wrongPassword:{ success: false, msg: 'Wrong password' },
  noUser:       { success: false, msg: 'No user found' },
  noToken:      { success: false, msg: 'No token' },
  wrongToken:   { success: false, msg: 'Wrong token' },
  lazy:         { success: false, msg: 'Something wrong, too lazy to write error msg'},
  missing:      { success: false, msg: 'Missing data'},
  noMovieId:    { success: false, msg: 'No movieId'},
  noMovie:      { success: false, msg: 'No movie found'}
}

/* Success messages */
module.exports.success = {
  userRegistered: { success: true, msg: 'success, user registered' },
  loggedIn:       { success: true, msg: 'success, user logged in' },
  correctToken:   { success: true, msg: 'success, correct token' },
  lazy:           { success: true, msg: 'success, works' }
}