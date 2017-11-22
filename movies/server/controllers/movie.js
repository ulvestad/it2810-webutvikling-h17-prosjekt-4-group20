const operate = require('../helpers/operate')
const tmdb = require('../helpers/tmdb')
const db = require('../helpers/db')
let genresStore // cba putting it into the db, fetches if not found

/* Stores some predefined list from TMDB into Movie, 15 pages */
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
    }
    return {}
  }).then(result => console.log('Complete pre load - tmdb'))
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
    if (genresStore) return genresStore
    genresStore = await tmdb.getGenres()
    return genresStore
  }).then(result => res.json(result))
}

/* Get movies */
/* DB   = popularity :: release_date :: vote_average */
/* TMDB = popular :: upcoming :: top_rated */
const getMovies = async (dbType, tmdbType, page = 0) => {
  const limit = page === 0 ? 20 : 5
  const skip = page === 0 ? 0 : (20 + (page * 5))
  const movies = await db.getMovies(dbType, skip, limit) // get movies
  if (movies.length >= limit) return movies // return if enough
  const more = await getAllPages(query) // danger uuu
  return [...movies, ...more].splice(0, 5)// 
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
// todo get this into same as getmovies yeh. Create different methods in db.js instead
module.exports.search = (req, res) => {
  operate.solve(async () => {
    const {query, page} = {...req.body}
    const limit = page === 0 ? 20 : 5
    const skip = page === 0 ? 0 : (20 + (page * 5))
    const movies = await db.searchMovie(query, skip, limit) // search for movies
    console.log('HAHAHAH', query, movies.length, skip, limit )
    if (movies.length >= limit) return movies // return if enough
    const more = await getAllPages(query) // danger uuu
    if (!more || !movies.length) return movies
    else return [...movies, ...more].splice(0, 5)// 
  }).then(result => res.json(result))
}

/* Get autocomplete suggestions, returns list of titles */
module.exports.getSuggestions = (req, res) => {
  operate.solve(async () => {
    const {query} = {...req.body}
    const movies = await db.suggestMovie(query) // get suggestions
    if (movies.length > 4) return movies // return if enough
    const more = await db.suggestMovie(query.substring(0, -2)) // remove 2 last chars to find more results
    return [...movies, ...more].splice(0, 5)
  }).then(result => res.json(result))
}

/* Get more from tmdb */
// checks if tmdb got any more stored
// hard limit on 10 right now // some querys can have over 100 pages of result..
let completedQuerys = []
const getAllPages = query => {
  if (completedQuerys.some(e => { return e === query })) return
  completedQuerys.push(query)
  operate.solve(async () => {
    let a = true
    let n = 0
    let array = []
    while (a) {
      let more = await tmdb.search(query, n) // get result
      let res = await db.saveMultipleMovies(more) // save em
      array = [...array, ...res]
      if (n === 5 || more.length === 0) a = false // break if no more results or hard limit
      n++
    }
    return array
  }).then(result => console.log('gottaCatchEmAll saved:', result.length))
}
