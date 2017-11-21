const operate = require('../helpers/operate')
const tmdb = require('../helpers/tmdb')
const db = require('../helpers/db')

/* Stores the most popular*/
module.exports.init = () => {
  operate.solve(async () => {
    for (let i = 0; i < 10; i++) {
      const a = await tmdb.getMovies('popular', i)
      const b = await tmdb.getMovies('upcoming', i)
      const c = await tmdb.getMovies('top_rated', i)
      let array = [...a, ...b, ...c]
      const r = await db.saveMultipleMovies(array)
    }
    return {}
  }).then(result => console.log('saved'))
}

/* Get single movie */
module.exports.get = (req, res) => {
  operate.solve(async () => {
    const movie = await db.findMovie(req.body.id)
    return movie
  }).then(result => res.json(result))
}

/* Get genres list */
// todo, on init save genres and get from there instead.
// or just save the genre list in js.
module.exports.getGenres = (req, res) => {
  operate.solve(async () => {
    const genres = await tmdb.getGenres()
    return genres
  }).then(result => res.json(result))
}

// TODO A message if there is no more results?
/* Get movies */
/* DB   = popularity :: release_date :: vote_average */
/* TMDB = popular :: upcoming :: top_rated */
const getMovies = async (dbType, tmdbType, page = 0) => {
  const limit = page === 0 ? 20 : 5
  const skip = page === 0 ? 0 : (20 + (page * 5))
  const movies = await db.getMovies(dbType, skip, limit) // get movies
  if (movies.length >= limit) return movies // return if enough
  let more = await tmdb.getMovies(tmdbType, page) // get more results
  more = await db.saveMultipleMovies(more) // save more
  return [...movies, ...more].splice(0, 5) // return max 8 of them
}

/* Get popular movies */
module.exports.getPopular = (req, res) => {
  operate.solve(async () => {
    return await getMovies('popularity', 'popular', req.body.page)
  }).then(result => res.json(result))
}

/* Get Latest movies, returns n movies*/
module.exports.getLatest = (req, res) => {
  operate.solve(async () => {
    return await getMovies('release_date', 'upcoming', req.body.page)
  }).then(result => res.json(result))
}

/* Get top rated movies, returns n movies*/
module.exports.getTopRated = (req, res) => {
  operate.solve(async () => {
    return await getMovies('vote_average', 'top_rated', req.body.page)
  }).then(result => res.json(result))
}

/* Get upocming movies, returns n movies*/
module.exports.getUpcoming = (req, res) => {
  operate.solve(async () => {
    return await getMovies('upcoming', 'upcoming', req.body.page)
  }).then(result => res.json(result))
}

/* Search for movies, returns n movies from db and/or tmdb */
module.exports.search = (req, res) => {
  operate.solve(async () => {
    const {query, page} = {...req.body}
    const limit = page === 0 ? 20 : 5
    const skip = page === 0 ? 0 : (20 + (page * 5))
    const movies = await db.searchMovie(query, skip, limit) // search for movies
    if (movies.length > 7) return movies // return if enough
    let more = await tmdb.search(query, page) // get more movies
    more = await db.saveMultipleMovies(more) // save result
    return [...movies, ...more].splice(0, 5) // return 8 of them
  }).then(result => res.json(result))
}

/* Get autocomplete suggestions, returns list of titles */
module.exports.getSuggestions = (req, res) => {
  operate.solve(async () => {
    const {query} = {...req.body}
    const movies = await db.suggestMovie(query) // get suggestions
    if (movies.length > 4) return movies // return if enough
    const more = await db.suggestMovie(query.substring(0, -3)) // remove 3 last chars to find more results
    return [...movies, ...more].splice(0, 5)
  }).then(result => res.json(result))
}
