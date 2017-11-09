const request = require('supertest')
const should = require('should')

const NewMovie = require('../models/newMovie')

// supertest request for get and post calls
const get = (agent, url, token, callback) => agent.get(url).set({ ...token, Accept: 'application/json' }).end(callback)
const post = (agent, url, token, data, callback) => agent.post(url).set({ ...token, Accept: 'application/json' }).send(data).end(callback)

// database methods
const find = (id, callback) => NewMovie.find({id: id}, callback)
const dumpDatabase = callback => NewMovie.remove({}, callback)

/* Integration tests for server api */
describe('movie', () => {

  before(done => {
    server = require('../../server')
    done()
    //dumpDatabase(err => done())
  })

  after(done => {
    server.close()
    done()
    //dumpDatabase(err => done())
  })

  xit('Should return search results', done => {
    post(request(server), '/api/search', {}, {query: 'avatar'}, (err, res) => {
      res.body.result.length.should.be.above(1)
      NewMovie.find({}, (err, movies) => {
        movies.length.should.be.above(0)
        done()
      })
    })
  })

  xit('Should return empty search results', done => {
    post(request(server), '/api/search', {}, {query: 'do not find anything please'}, (err, res) => {
    	res.body.result.length.should.be.equal(0)
      done()
    })
  })

  it('find suggestions', done => {
    post(request(server), '/api/suggestions', {}, {query: 'bat'}, (err, res) => {
      res.body.result.forEach(e => console.log(e.title))
      done()
    })
  })
})
