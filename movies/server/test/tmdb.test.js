const request = require('supertest')
const should = require('should')
const server = require('./../../server.js')

const tmdb = require('../controllers/tmdb')

/* Integration tests for server api */
describe('movie', () => {

  it('Should search', done => {
    tmdb.searchRequest('batman', (err, res, body) => {
      var json = JSON.parse(body)
      json.results.length.should.be.above(5)
      done()
    })
  })

  it('Should find', done => {
    tmdb.findRequest(272, (err, res, body) => {
      var json = JSON.parse(body)
      json.id.should.equal(272)
      done()
    })
  })
  
})
