const operate = require('../helpers/operate')
const tmdb = require('../helpers/tmdb')
const db = require('../helpers/db')
let genresStore

/**
 * Init with fetching movies from tmdb.
 * Stores the predefined list from TMDB into database, 15 pages
 */
module.exports.init = async () => {
  console.log('Init pre load - tmdb')
  operate.solve(async () => {
    for (let i = 0; i < 15; i++) {
      const n = await db.getMoviesCount()
      if (n > 1000) return {}
      const a = await tmdb.getMovies('popular', i)
      const b = await tmdb.getMovies('upcoming', i)
      const c = await tmdb.getMovies('top_rated', i)
      let array = [...a, ...b, ...c]
      const r = await db.saveMultipleMovies(array)
      console.log('Downloading...')
    }
    return {}
  }).then(result => console.log('Complete pre load - tmdb'))
}

/**
 * Get single movie
 * @param {String} req.body.id
 * @returns {Object.{<Boolean>.<Array.<genres>>}} success, genres
 */
module.exports.get = (req, res) => {
  operate.solve(async () => {
    const movie = await db.findMovie(req.body.id)
    return movie
  }).then(result => res.json(result))
}

/**
 * Get genres list
 * @returns {Object.{<boolean>.<Array>}} success, token
 */
module.exports.getGenres = (req, res) => {
  operate.solve(async () => {
    if (genresStore) return genresStore
    genresStore = await tmdb.getGenres()
    return genresStore
  }).then(result => res.json(result))
}

/**
 * Get movies by type
 * @param {String} dbType - (popularity, release_date, vote_average)
 * @param {String} tmdbType -(popular, upcoming, top_rated)
 * @param {Number} page
 * @returns {Array.<genres>} movies
 */
const getMovies = async (dbType, tmdbType, page = 0) => {
  const limit = page === 0 ? 20 : 5
  const skip = page === 0 ? 0 : (20 + (page * 5))
  const movies = await db.getMovies(dbType, skip, limit) // get movies
  return movies // return result
}

/**
 * Get popular movies
 * @params {Number} req.body.page
 * @returns {Array.<Movie>} movies
 */
module.exports.getPopular = (req, res) => {
  operate.solve(async () => {
    return await getMovies('popularity', 'popular', req.body.page)
  }).then(result => res.json(result))
}

/**
 * Get latest movies
 * @params {Number} req.body.page
 * @returns {Array.<Movie>} movies
 */
module.exports.getLatest = (req, res) => {
  operate.solve(async () => {
    return await getMovies('release_date', 'upcoming', req.body.page)
  }).then(result => res.json(result))
}

/**
 * Get top rated movies
 * @params {Number} req.body.page
 * @returns {Array.<Movie>} movies
 */
module.exports.getTopRated = (req, res) => {
  operate.solve(async () => {
    return await getMovies('vote_average', 'top_rated', req.body.page)
  }).then(result => res.json(result))
}

/**
 * Get upcoming movies
 * @params {Number} req.body.page
 * @returns {Array.<Movie>} movies
 */
module.exports.getUpcoming = (req, res) => {
  operate.solve(async () => {
    return await getMovies('upcoming', 'upcoming', req.body.page)
  }).then(result => res.json(result))
}

/**
 * Search for movies, if not found in database it will try tmdb site
 * @params {String} req.body.query
 * @params {Number} req.body.page
 * @returns {Array.<Movie>} movies
 */
module.exports.search = (req, res) => {
  operate.solve(async () => {
    const {query, page} = {...req.body}
    const limit = page === 0 ? 20 : 5
    const skip = page === 0 ? 0 : (20 + (page * 5))
    const movies = await db.searchMovie(query, skip, limit) // search for movies
    if (movies.length >= limit) return movies // return if enough
    const more = await getAllPages(query) // danger uuu
    if (!more || !more.result || !more.result.length) return movies
    else return [...movies, ...more.result].splice(0, limit)//
  }).then(result => res.json(result))
}

/**
 * Get autocomplete suggestions
 * @params {String} req.body.query
 * @returns {Array.<String>} movietitles
 */
module.exports.getSuggestions = (req, res) => {
  operate.solve(async () => {
    const {query} = {...req.body}
    const movies = await db.suggestMovie(query) // get suggestions
    if (movies.length > 4) return movies // return if enough
    const more = await db.suggestMovie(query.substring(0, -2)) // remove 2 last chars to find more results
    return [...movies, ...more].splice(0, 5)
  }).then(result => res.json(result))
}

/**
 * Get more data from tmdb, behaves recursive to fetch more if present. Returns first actuall content
 * @params {String} query
 * @params {Number} page
 * @params {Boolean} allow to bypass banlist
 * @returns {Array.<Movie>} movies
 */
let completedQuerys = [] // query banlist
const getAllPages = (query, page=0, allow) => {
  if (!allow && completedQuerys.some(e => { return e === query })) return // return if banlisted
  completedQuerys.push(query) // add query to banlist
  return operate.solve(async () => {
    let more = await tmdb.search(query, page) // get result
    let res = await db.saveMultipleMovies(more) // save result
    page++
    // continue recursive if more stuff to get
    if (page !== 10 && more.length !== 0) getAllPages(query, page, true)
    if (res.length) return res // return at first sight at something
  })
}
