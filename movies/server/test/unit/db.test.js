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

  const onError = e => {
    console.log(e)
    should.exists(null)
  }

  before(async () => {
    // assume it works haha
    const a = await db.saveMultipleMovies(mock.popular)
    const b = await db.saveMultipleMovies(mock.top_rated)
    const c = await db.saveMultipleMovies(mock.upcoming)
  })

  after(done => {
    User.remove({}, e => {
      Movie.remove({}, e => done())
    })
  })

  // Could write them as oneliner, but not easy to read :(
  //it('Should save user', async () => (await db.saveUser(user)).username.should.be.equal(user.username))

  it('Should save user', async () => {
    const u = await db.saveUser(user)
    u.username.should.be.equal(user.username)
  })

  it('Should find user', async () => {
    const u = await db.findUser(user.username)
    u.username.should.be.equal(user.username)
  })

  it('Should find movie', async () => {
    const m = await db.findMovie(mock.popular[0].id)
    m.title.should.be.equal(mock.popular[0].title)
  })

  xit('Should add movie to list', async () => {
  })

  xit('Should fail to add movie to list', async () => {
  })

  xit('Should remove movie from list', async () => {
  })

  xit('Should add history', async () => {
  })

  it('Should save multiple movies', async () => {
    const a = await db.saveMultipleMovies(mock.popular)
    should.exists(a)
  })

  it('Should search for movie', async () => {
    const a = await db.searchMovie('a')
    const b = await db.searchMovie('c')
    a.length.should.be.equal(8)
    b.length.should.be.equal(8)
  })

  it('Should suggest movie title', async () => {
    const a = await db.suggestMovie('')
    a.length.should.be.equal(5)
  })

  /* popularity :: release_date :: vote_average */
  describe('<3', () => {
    it('Should find popular', async () => {
      const a = await db.getMovies('popularity', 0)
      const b = await db.getMovies('popularity', 1)
      a.forEach((e, i) => e.title.should.equal(mock.popular[i].title))
      b.forEach((e, i) => e.title.should.equal(mock.popular[i+8].title))
    })

    it('Should find latest', async () => {
      const a = await db.getMovies('release_date', 0)
      const b = await db.getMovies('release_date', 1)
      //a.forEach((e, i) => console.log(i, e.release_date, e.title))
      //b.forEach((e, i) => console.log(i+8, e.release_date, e.title))
      // Can use .reduce() and check if date is always less/more
      // Cant test, cus mock.upcomming id filtered 
      a.length.should.be.above(0)
      b.length.should.be.above(0)
    })

    it('Should find top rated', async () => {
      const a = await db.getMovies('vote_average', 0)
      const b = await db.getMovies('vote_average', 1)
      //a.forEach((e, i) => console.log(i, e.release_date, e.title))
      //b.forEach((e, i) => console.log(i+8, e.release_date, e.title))
      a.forEach((e, i) => e.title.should.equal(mock.top_rated[i].title))
      b.forEach((e, i) => e.title.should.equal(mock.top_rated[i+8].title))
    })

    it('Should find upcomming', async () => {
      const a = await db.getUpcomming(0)
      const b = await db.getUpcomming(1)
      console.log(a.length, b.length)
      a.forEach((e, i) => console.log(i, e.release_date, e.title))
      b.forEach((e, i) => console.log(i+8, e.release_date, e.title))
      mock.upcoming.forEach((e, i) => console.log(i, e.release_date, e.title))
    })
  })
})




