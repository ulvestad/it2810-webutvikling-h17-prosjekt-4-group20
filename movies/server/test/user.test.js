const request = require('supertest')
const should = require('should')
const server = require('./../../server.js')
const mongoose = require('mongoose')

const user = require('../controllers/user')
const User = mongoose.model('User')

// supertest request for get and post calls
const get = (agent, url, data, callback) => request(server).get(url).send(data).end(callback)
const post = (agent, url, data, callback) => request(server).post(url).send(data).end(callback)

// database methods
const saveUser = (user, callback) => user.save(callback)
const findUsers = callback => User.find({}, callback)
const dumpDatabase = callback => User.remove({}, callback)

/* Integration tests for server api */
describe('user', () => {
  let server
  const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyaWQiOiJhbmR5IiwiaWF0IjoxNTA5MDQ1OTYyfQ.jB3972Y_e1amizf-jexj5ZA97rkbJIej63XfvktbwpI'
  const decoded = { userid: 'andy', iat: 1509045962 }
  const data = {
    userid: 'andy', 
    email: 'at@a.t', 
    password: '123', 
    hash: '$2a$10$S.QJsnORXMLsVnyqT./sOOgrKYj5KUw4h.04fFyf8aLiIlB8SSR8.'
  }

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
        res.body.msg.should.equal(user.errors.noUserid.msg)
        done()
      })
    })

    it('fail no email', done => {
      post(request(server), '/api/register', {...data, email:''}, (err, res) => {
        res.body.msg.should.equal(user.errors.noEmail.msg)
        done()
      })
    })

    it('fail no password', done => {
      post(request(server), '/api/register', {...data, password:''}, (err, res) => {
        res.body.msg.should.equal(user.errors.noPassword.msg)
        done()
      })
    })

    it('fail user exist', done => {
      post(request(server), '/api/register', {...data}, (err, res) => {
        res.body.msg.should.equal(user.errors.userExists.msg)
        done()
      })
    })

    it('success', done => {
      post(request(server), '/api/register', {...data, userid: 'johan'}, (err, res) => {
        res.body.msg.should.equal(user.success.userRegistered.msg)
        done()
      })
    })

  })

  describe('login', () => {
    it('fail no userid', done => {
      post(request(server), '/api/login', {...data, userid:''}, (err, res) => {
        res.body.msg.should.equal(user.errors.noUserid.msg)
        done()
      })
    })

    it('fail no password', done => {
      post(request(server), '/api/login', {...data, password:''}, (err, res) => {
        res.body.msg.should.equal(user.errors.noPassword.msg)
        done()
      })
    })

    it('fail no user', done => {
      post(request(server), '/api/login', {...data, userid: 'johan'}, (err, res) => {
        res.body.msg.should.equal(user.errors.noUser.msg)
        done()
      })
    })

    it('fail wrong password', done => {
      post(request(server), '/api/login', {...data, password: 'wrong'}, (err, res) => {
        res.body.msg.should.equal(user.errors.wrongPassword.msg)
        done()
      })
    })

    it('success logged in', done => {
      post(request(server), '/api/login', {...data}, (err, res) => {
        res.body.msg.should.equal(user.success.loggedIn.msg)
        done()
      })
    })
  })

  describe('middleware', () => {
    it('fail no token', done => {
      get(request(server), '/api/user', {}, (err, res) => {
        res.body.msg.should.equal(user.errors.noToken.msg)
        done()
      })
    })

    it('fail wrong token', done => {
      get(request(server), '/api/user', {token: 'wrong'}, (err, res) => {
        res.body.msg.should.equal(user.errors.wrongToken.msg)
        done()
      })
    })

    it('success', done => {
      get(request(server), '/api/user', {token: token}, (err, res) => {
        res.body.msg.should.equal(user.success.correctToken.msg)
        done()
      })
    })
  })

  describe('movielist', () => {
    it('success', done => {
      get(request(server), '/api/user', {token: token}, (err, res) => {
        res.body.msg.should.equal(user.success.correctToken.msg)
        done()
      })
    })
  })
})
