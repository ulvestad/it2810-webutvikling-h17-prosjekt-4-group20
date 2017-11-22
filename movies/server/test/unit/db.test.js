const should = require('should')
require('dotenv').config()
require('./../../../server.js')

const User = require('../../models/user')
const Movie = require('../../models/movie')

const mock = {
  popular: JSON.parse(require('../mock/popular')).results,
  top_rated: JSON.parse(require('../mock/top_rated')).results,
  upcoming: JSON.parse(require('../mock/upcoming')).results
}

const db = require('../../helpers/db')

/* Tests for db wrapper */
describe('db', () => {
  const user = {username: 'a', email: 'a', hash: 'a', movielist: [], history: []}

  const onError = e => should.exists(null)

  before(async () => {
    await db.saveMultipleMovies(mock.popular)
    await db.saveMultipleMovies(mock.top_rated)
    await db.saveMultipleMovies(mock.upcoming)
  })

  after(async () => {
    await db.dumpMovies()
  })


  it('Should search for movie', async () => {
    const a = await db.searchMovie('a')
    const b = await db.searchMovie('c')
    a.length.should.be.equal(5)
    b.length.should.be.equal(5)
  })

  it('Should suggest movie title', async () => {
    const a = await db.suggestMovie('')
    a.length.should.be.equal(5)
  })

  /* popularity :: release_date :: vote_average */
  it('Should find popular', async () => {
    const a = await db.getMovies('popularity', 0, 20)
    a.forEach((e, i) => e.title.should.equal(mock.popular[i].title))
  })

  it('Should find latest', async () => {
    const a = await db.getMovies('release_date', 0, 20)
    // different filters from mock so wont be the same.
    //a.forEach((e, i) => e.title.should.equal(mock.top_rated[i].title))
    a.length.should.be.equal(20)
  })

  it('Should find top rated', async () => {
    const a = await db.getMovies('vote_average', 0, 20)
    // different filters from mock so wont be the same.
    //a.forEach((e, i) => e.title.should.equal(mock.top_rated[i].title))
    a.length.should.be.equal(20)
  })

  it('Should find upcoming', async () => {
    const a = await db.getMovies('upcoming', 0, 20)
    // different filters from mock so wont be the same.
    //mock.upcoming.forEach((e, i) => console.log(i, e.release_date, e.title))
    a.length.should.be.equal(20)
  })
})




