const request = require('supertest')
const should = require('should')
const server = require('./../../server.js')

const movie = require('../controllers/movie')
const Movie = require('./../models/movie')

// supertest request for get and post calls
const get = (agent, url, data, callback) => request(server).get(url).send(data).end(callback)
const post = (agent, url, data, callback) => request(server).post(url).send(data).end(callback)

// database methods
const saveMovie = (user, callback) => movie.save(callback)
const findMovies = callback => Movie.find({}, callback)
const dumpDatabase = callback => User.remove({}, callback)

/* Integration tests for server api */
describe('movie', () => {
  let server

  before(done => {
    server = require('../../server')
    done()
  })

  afterEach(done => {
    dumpDatabase(err => {
      saveUser(new User({...data}), err => done())
    })
  })

  after(done => {
    server.close()
    done()
  })

  it('api', done => {
    get(request(server), '/api', {}, (err, res) => {
      res.status.should.equal(200) // 200 status code
      res.type.should.equal('application/json') // json response
      res.body.msg.should.equal('api') // correct data
      done()
    })
  })

  describe('register', () => {
    it('fail no userid', done => {
      post(request(server), '/api/register', {...data, userid:''}, (err, res) => {
        res.body.msg.should.equal(user.errors.noUserid)
        done()
      })
    })
  })
})
