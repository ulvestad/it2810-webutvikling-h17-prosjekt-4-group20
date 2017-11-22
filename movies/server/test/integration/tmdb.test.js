const should = require('should')

const tmdb = require('../../helpers/tmdb')

/* Tests for tmdb service. */
describe('tmdb', () => {

  afterEach(done => setTimeout(done, 500)) // delay between each test, tmdb has limit

  /* popular :: upcoming :: top_rated */

  it('should get popular', async () => {
    const a = await tmdb.getMovies('popular')
    a.length.should.be.above(0)
  })

  it('should get latest', async () => {
    const a = await tmdb.getMovies('upcoming')
    a.length.should.be.above(0)
  })

  it('should get top rated', async () => {
    const a = await tmdb.getMovies('top_rated')
    a.length.should.be.above(0)
  })

  it('should search', async () => {
    const a = await tmdb.search('batman')
    a.length.should.be.above(0)
  })

  it('should find', async () => {
    const a = await tmdb.find(272)
    should.exist(a)
  })

  it('should get genres', async () => {
    const a = await tmdb.getGenres()
    should.exist(a)
  })
})


