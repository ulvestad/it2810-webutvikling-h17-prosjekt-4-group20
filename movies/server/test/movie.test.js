const request = require('supertest')
const should = require('should')
const server = require('./../../server.js')

// supertest request for get and post calls
const get = (agent, url, token, callback) => agent.get(url).set({ ...token, Accept: 'application/json' }).end(callback)
const post = (agent, url, token, data, callback) => agent.post(url).set({ ...token, Accept: 'application/json' }).send(data).end(callback)

// database methods
const saveMovie = (movie, callback) => movie.save(callback)
const dumpDatabase = callback => Movie.remove({}, callback)


/* Integration tests for server api */
describe('movie', () => {

  it('Should return search results', done => {
    post(request(server), '/api/search', {}, {query: 'Batman'}, (err, res) => {
      res.body.result.length.should.be.above(0)
      console.log(res.body.result)
      done()
    })
  })

  it('Should return empty search results', done => {
    post(request(server), '/api/search', {}, {query: 'do not find anything please'}, (err, res) => {
    	res.body.result.length.should.be.equal(0)
      done()
    })
  })
})
