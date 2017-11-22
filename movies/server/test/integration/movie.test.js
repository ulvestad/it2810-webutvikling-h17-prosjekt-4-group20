const request = require('supertest')
const should = require('should')
const db = require('../../helpers/db')
const util = require('../util')
require('dotenv').config()

const mock = {
  popular: JSON.parse(require('../mock/popular')).results,
  top_rated: JSON.parse(require('../mock/top_rated')).results,
  upcoming: JSON.parse(require('../mock/upcoming')).results
}

/* Integration tests for server api */
describe('movie', () => {
  let server

  before(async () => {
    server = require('../../../server')
    await db.dumpMovies()
    await db.saveMultipleMovies(mock.popular)
    await db.saveMultipleMovies(mock.top_rated)
    await db.saveMultipleMovies(mock.upcoming)
  })

  after(async () => {
    await db.dumpMovies()
  })

  it('Should search get plenty of results', async () => {
    const a = await util.sendPost(request(server), '/api/search', {}, {query: 't', page: 0})
    console.log(a.body.result.length)
    a.body.result.length.should.above(10)
  })

  it('Should return empty search results', async () => {
    const a = await util.sendPost(request(server), '/api/search', {}, {query: 'do not find anything please'})
    a.body.result.length.should.be.equal(0)
  })

  it('Should find popular', async () => {
    const a = await util.sendPost(request(server), '/api/popular', {}, {})
    a.body.result.length.should.be.equal(20)
  })

  it('Should find latest', async () => {
    const a = await util.sendPost(request(server), '/api/latest', {}, {next: 0})
    a.body.result.length.should.be.equal(20)
  })

  it('Should find upcomming', async () => {
    const a = await util.sendPost(request(server), '/api/upcoming', {}, {next: 0})
    a.body.result.length.should.be.equal(20)
  })

  it('Should find top', async () => {
    const a = await util.sendPost(request(server), '/api/top', {}, {next: 0})
    a.body.result.length.should.be.equal(20)
  })

  it('Should find suggestions', async () => {
    const a = await util.sendPost(request(server), '/api/suggestions', {}, {query: 'bat'})
    a.body.result.length.should.be.equal(5)
  })

  it('Should get movie', async () => {
    const a = await util.sendPost(request(server), '/api/movie', {}, {id: 298250})
      should.exist(a.body.result)
  })
})
