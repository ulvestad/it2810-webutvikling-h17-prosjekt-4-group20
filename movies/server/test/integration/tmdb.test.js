const should = require('should')

const tmdb = require('../../helpers/tmdb')

/* Tests for tmdb service. */
// It is disabled on default, request get method in helpers/tmdb.js will not accept node_env=test
xdescribe('tmdb - disabled on default', () => {

  afterEach(done => setTimeout(done, 500)) // delay between each test, tmdb has limit

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


