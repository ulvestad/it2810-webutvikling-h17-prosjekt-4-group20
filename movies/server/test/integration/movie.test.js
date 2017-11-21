const request = require('supertest')
const should = require('should')
require('dotenv').config()

const Movie = require('../../models/newMovie')

// supertest request for get and post calls
const get = (agent, url, header, callback) => agent.get(url).set({ ...header, Accept: 'application/json' }).end(callback)
const post = (agent, url, token, data, callback) => agent.post(url).set({ ...token, Accept: 'application/json' }).send(data).end(callback)

const saveMovie = (movie, callback) => new Movie(movie).save(callback)

/* Integration tests for server api */
describe('movie', () => {
  let server

  before(done => {
    server = require('../../../server')
    done()
  })

  beforeEach(done => {
    saveMovie({id: 1, title: 'asd'}, err =>  done() )
  })

  after(done => {
    server.close()
    Movie.remove({}, err => done())
  })

  it('Should return search results', done => {
    post(request(server), '/api/search', {}, {query: 'bat', page: 1}, (err, res) => {
      res.body.result.length.should.be.equal(8)
      done()
    })
  })

  it('Should return empty search results', done => {
    post(request(server), '/api/search', {}, {query: 'do not find anything please'}, (err, res) => {
    	res.body.result.length.should.be.equal(0)
      done()
    })
  })

  it('Should find popular', done => {
    post(request(server), '/api/popular', {}, {next: 0}, (err, res) => {
      res.body.result.length.should.be.equal(8)
      done()
    })
  })

  xit('Should find latest', done => {})
  xit('Should find upcomming', done => {})
  xit('Should find top', done => {})

  it('Should find suggestions', done => {
    post(request(server), '/api/suggestions', {}, {query: 'bat'}, (err, res) => {
      res.body.result.length.should.be.equal(5)
      done()
    })
  })

  it('Should get movie', done => {
    post(request(server), '/api/movie', {}, {id: 1}, (err, res) => {
      should.exist(res.body.result)
      done()
    })
  })
})
