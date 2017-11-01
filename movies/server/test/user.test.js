const request = require('supertest')
const should = require('should')
const server = require('./../../server.js')
const mongoose = require('mongoose')

const user = require('../controllers/user')
const User = mongoose.model('User')

// supertest request for get and post calls
const get = (agent, url, token, callback) => agent.get(url).set({ ...token, Accept: 'application/json' }).end(callback)
const post = (agent, url, token, data, callback) => agent.post(url).set({ ...token, Accept: 'application/json' }).send(data).end(callback)

// database methods
const saveUser = (user, callback) => user.save(callback)
const findUsers = callback => User.find({}, callback)
const dumpDatabase = callback => User.remove({}, callback)

/* Integration tests for servers user api */
describe('user', () => {
  let server
  const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7Il9pZCI6IjU5ZjliYTI1YzczNTllMGE1NDYyNjgxZiIsInVzZXJuYW1lIjoiYW5keSIsImVtYWlsIjoiYXRAYS50IiwiaGFzaCI6IiQyYSQxMCRTLlFKc25PUlhNTHNWbnlxVC4vc09PZ3JLWWo1S1V3NGguMDRmRnlmOGFMaUlsQjhTU1I4LiIsIl9fdiI6MCwibW92aWVsaXN0IjpbXX0sImV4cCI6MTUxMDE0MzE0MSwiaWF0IjoxNTA5NTM4MzQxfQ.8Sv-THH-wGGa20W3WNtCJ5UjPBUVuPD_8mm-P4uWUD8'
  const decoded = { username: 'andy', iat: 1509045962 }
  const data = {
    username: 'andy', 
    email: 'at@a.t', 
    password: '123',
    confirm: '123',
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
  /* Register tests */
  describe('register', () => {
    it('fail no username', done => {
      post(request(server), '/api/register', {}, {...data, username:''}, (err, res) => {
        res.body.msg.should.equal(user.errors.noUsername.msg)
        done()
      })
    })

    it('fail no email', done => {
      post(request(server), '/api/register', {}, {...data, email:''}, (err, res) => {
        res.body.msg.should.equal(user.errors.noEmail.msg)
        done()
      })
    })

    it('fail no password', done => {
      post(request(server), '/api/register', {}, {...data, password:''}, (err, res) => {
        res.body.msg.should.equal(user.errors.noPassword.msg)
        done()
      })
    })

    it('fail user exist', done => {
      post(request(server), '/api/register', {}, {...data}, (err, res) => {
        res.body.msg.should.equal(user.errors.userExists.msg)
        done()
      })
    })

    it('fail email exist', done => {
      post(request(server), '/api/register', {}, {...data, username: 'johan'}, (err, res) => {
        res.body.msg.should.equal(user.errors.emailExists.msg)
        done()
      })
    })

    it('success', done => {
      post(request(server), '/api/register', {}, { ...data, username: 'johan', email: 'it@a.t'}, (err, res) => {
        res.body.msg.should.equal(user.success.userRegistered.msg)
        done()
      })
    })

    // TODO test for invalid username
    // TODO test for invalid email
    // TODO test for invalid password
    // TODO test for invalid confirm

    // TODO test for sanitaztion ??

  })

  /* Login tests */
  describe('login', () => {
    it('fail no username', done => {
      post(request(server), '/api/login', {}, {...data, username:''}, (err, res) => {
        res.body.msg.should.equal(user.errors.noUsername.msg)
        done()
      })
    })

    it('fail no password', done => {
      post(request(server), '/api/login', {}, {...data, password:''}, (err, res) => {
        res.body.msg.should.equal(user.errors.noPassword.msg)
        done()
      })
    })

    it('fail no user', done => {
      post(request(server), '/api/login', {}, {...data, username: 'johan'}, (err, res) => {
        res.body.msg.should.equal(user.errors.noUser.msg)
        done()
      })
    })

    it('fail wrong password', done => {
      post(request(server), '/api/login', {}, {...data, password: 'wrong'}, (err, res) => {
        res.body.msg.should.equal(user.errors.wrongPassword.msg)
        done()
      })
    })

    it('success logged in', done => {
      post(request(server), '/api/login', {}, {...data}, (err, res) => {
        res.body.msg.should.equal(user.success.loggedIn.msg)
        done()
      })
    })
  })

  /* Middleware tests */
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

  // TODO test token exp date?

  describe('movielist', () => {
    const first = 'Balto (1995)'
    const second = 'Nixon (1995)'


    it('success', done => {
      get(request(server), '/api/user', {token: token}, (err, res) => {
        res.body.msg.should.equal(user.success.correctToken.msg)
        done()
      })
    })

    it('should ..', done => {
      post(request(server), '/api/user/add', {token: token}, {title: first}, (err, res) => {
        post(request(server), '/api/user/add', {token: token}, { title: first}, (err, res) => {
          post(request(server), '/api/user/add', {token: token}, { title: second}, (err, res) => {
            post(request(server), '/api/user/remove', {token: token}, { title: first}, (err, res) => {
              post(request(server), '/api/user/remove', {token: token}, { title: second}, (err, res) => {
                done()
              })
            })
          })
        })
      })
    })
  })
})
