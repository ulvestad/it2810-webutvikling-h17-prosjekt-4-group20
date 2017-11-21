const request = require('supertest')
const should = require('should')
const server = require('./../../../server.js')
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const response = require('../../response')

const User = require('../../models/user')
const Movie = require('../../models/newMovie')

// Methods from modules
const get = (agent, url, token, cb) => agent.get(url).set({ ...token, Accept: 'application/json' }).end(cb)
const post = (agent, url, token, data, cb) => agent.post(url).set({ ...token, Accept: 'application/json' }).send(data).end(cb)

// database methods
const saveUser = (user, callback) => new User(user).save(callback)
const saveMovie = (movie, callback) => new Movie(movie).save(callback)
const findUsers = callback => User.find({}, callback)

/* Integration tests for servers user api */
describe('user', () => {
  let server
  const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7Il9pZCI6IjVhMTBhODg4OGIxNDQ3MmQwMDEzZDM3OCIsInVzZXJuYW1lIjoiYW5keSIsImVtYWlsIjoiYXRAYS50IiwiaGFzaCI6IiQyYSQxMCRTLlFKc25PUlhNTHNWbnlxVC4vc09PZ3JLWWo1S1V3NGguMDRmRnlmOGFMaUlsQjhTU1I4LiIsIl9fdiI6MCwiaGlzdG9yeSI6W10sIm1vdmllbGlzdCI6W119LCJleHAiOjE1MTE2NDU5NjAsImlhdCI6MTUxMTA0MTE2MH0.fOtTNITpISqLYnPA3vncLqxvrtj88aKMa-8y3HGonhI'
  const decoded = { username: 'andy', iat: 1509045962 }
  const data = {
    username: 'andy', 
    email: 'at@a.t', 
    password: '123',
    confirm: '123',
    hash: '$2a$10$S.QJsnORXMLsVnyqT./sOOgrKYj5KUw4h.04fFyf8aLiIlB8SSR8.'
  }

  before(done => {
    server = require('../../../server')
    User.remove({}, done())
  })

  afterEach(done => {
    User.remove({}, e => {
      Movie.remove({}, e => {
        saveUser(data, done())
      })
    })
  })

  after(done => {
    server.close()
    done()
  })

  it('Should connect to api', done => {
    get(request(server), '/api', {}, (err, res) => {
      res.status.should.equal(200) // 200 status code
      res.type.should.equal('application/json') // json response
      res.body.msg.should.equal('api') // correct data
      done()
    })
  })

  /* Register tests */
  describe('register', () => {
    it('Should fail no username', done => {
      post(request(server), '/api/register', {}, {...data, username:''}, (err, res) => {
        res.body.success.should.equal(false)
        done()
      })
    })

    it('Should fail no email', done => {
      post(request(server), '/api/register', {}, {...data, email:''}, (err, res) => {
        res.body.success.should.equal(false)
        done()
      })
    })

    it('Should fail no password', done => {
      post(request(server), '/api/register', {}, {...data, password:''}, (err, res) => {
        res.body.success.should.equal(false)
        done()
      })
    })

    it('Should fail user exist', done => {
      post(request(server), '/api/register', {}, {...data}, (err, res) => {
        res.body.success.should.equal(false)
        done()
      })
    })

    it('Should fail email exist', done => {
      post(request(server), '/api/register', {}, {...data, username: 'johan'}, (err, res) => {
        res.body.success.should.equal(false)
        done()
      })
    })

    it('Should success', done => {
      post(request(server), '/api/register', {}, { ...data, username: 'johan', email: 'it@a.t'}, (err, res) => {
        res.body.success.should.equal(true)
        done()
      })
    })
  })

  /* Login tests */
  describe('login', () => {
    it('Should fail no username', done => {
      post(request(server), '/api/login', {}, {...data, username:''}, (err, res) => {
        res.body.success.should.equal(false)
        done()
      })
    })

    it('Should fail no password', done => {
      post(request(server), '/api/login', {}, {...data, password:''}, (err, res) => {
        res.body.success.should.equal(false)
        done()
      })
    })

    it('Should fail no user', done => {
      post(request(server), '/api/login', {}, {...data, username: 'johan'}, (err, res) => {
        res.body.success.should.equal(false)
        done()
      })
    })

    it('Should fail wrong password', done => {
      post(request(server), '/api/login', {}, {...data, password: 'wrong'}, (err, res) => {
        res.body.success.should.equal(false)
        done()
      })
    })

    it('Should success logged in', done => {
      post(request(server), '/api/login', {}, {...data}, (err, res) => {
        res.body.success.should.equal(true)
        done()
      })
    })
  })

  /* Middleware tests */
  describe('middleware', () => {
    it('Should fail no token', done => {
      get(request(server), '/api/user', {}, (err, res) => {
        res.body.success.should.equal(false)
        done()
      })
    })

    it('Should fail wrong token', done => {
      get(request(server), '/api/user', {token: 'wrong'}, (err, res) => {
        res.body.success.should.equal(false)
        done()
      })
    })

    it('Should success', done => {
      get(request(server), '/api/user', {token: token}, (err, res) => {
        res.body.success.should.equal(true)
        done()
      })
    })
  })
})
   