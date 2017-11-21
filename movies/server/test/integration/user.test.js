const request = require('supertest')
const should = require('should')
const server = require('./../../../server.js')
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const response = require('../../response')

require('dotenv').config()

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
  const mov1 = { id: 268, title: 'Batman' }
  const mov2 = { id: 167, title: 'Asd' }
  const data = {
    username: 'andy', 
    email: 'at@a.t', 
    password: '123',
    confirm: '123',
    hash: '$2a$10$S.QJsnORXMLsVnyqT./sOOgrKYj5KUw4h.04fFyf8aLiIlB8SSR8.'
  }

  before(done => {
    server = require('../../../server')
    done()
  })

  beforeEach(done => {
    User.remove({}, e => {
      Movie.remove({}, e => {
        saveUser(data, e => {
          saveMovie(mov1, e => {
            saveMovie(mov2, e => {
              done()
            })
          })
        })
      })
    })
  })

  after(done => {
    server.close()
    User.remove({}, e => {
      Movie.remove({}, e => {
        done()
      })
    })
  })

  describe('movielist and history', () => {
    it('Should add movies to list', done => {
      post(request(server), '/api/user/add', {token: token}, {id: mov1.id}, (err, res) => {
        res.body.result.length.should.be.equal(1)
        done()
      })
    })

    it('Should not add multiple of same movie', done => {
      post(request(server), '/api/user/add', {token: token}, {id: mov1.id}, (err, res) => {
        res.body.result.length.should.be.equal(1)
        post(request(server), '/api/user/add', {token: token}, {id: mov1.id}, (err, res) => {
          res.body.result.length.should.be.equal(1)
          done()
        })
      })
    })

    it('Should delete movie form list', done => {
      post(request(server), '/api/user/add', {token: token}, {id: mov1.id}, (err, res) => {
        res.body.result.length.should.be.equal(1)
        post(request(server), '/api/user/remove', {token: token}, {id: mov1.id}, (err, res) => {
          res.body.result.length.should.be.equal(0)
          done()
        })
      })
    })

    it('Should add search to history', done => {
      post(request(server), '/api/user/add/history', {token: token}, {searchQuery: 'batman'}, (err, res) => {
        post(request(server), '/api/user/add/history', {token: token}, {searchQuery: 'superman'}, (err, res) => {
          res.body.result.length.should.be.equal(2)
          done()
        })
      })
    })
  })
})
   