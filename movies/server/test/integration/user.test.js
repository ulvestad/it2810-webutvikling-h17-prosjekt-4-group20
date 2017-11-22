const request = require('supertest')
const should = require('should')
const server = require('./../../../server.js')

const util = require('../util')
const db = require('../../helpers/db')

/* Integration tests for servers user api */
describe('user', () => {
  let server
  const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjoiYW5keSIsImV4cCI6MTUxMTk2OTE1MywiaWF0IjoxNTExMzY0MzUzfQ.xOP2YruwynAFNeSkOjp1QPESFsXGLVevHDDA2wRmfQM'
  const mov1 = { id: 268, title: 'Batman' }
  const mov2 = { id: 167, title: 'Asd' }
  const data = {
    username: 'andy', 
    email: 'at@a.t', 
    password: '123',
    confirm: '123',
    hash: '$2a$10$S.QJsnORXMLsVnyqT./sOOgrKYj5KUw4h.04fFyf8aLiIlB8SSR8.'
  }

  before(async () => {
    server = require('../../../server')
    await db.saveUser(data)
    await db.saveMovie(mov1)
    await db.saveMovie(mov2)
  })

  after(async () => {
    server.close()
    await db.dumpMovies()
    await db.dumpUsers()
  })

  describe('movielist and history', () => {
    it('Should add movies to list', async () => {
      const a = await util.sendPost(request(server), '/api/user/add', {token: token}, {id: mov1.id})
      a.body.result.length.should.be.equal(1)
    })

    it('Should not add multiple of same movie', async () => {
      const a = await util.sendPost(request(server), '/api/user/add', {token: token}, {id: mov1.id})
      a.body.result.length.should.be.equal(1)
      const b = await util.sendPost(request(server), '/api/user/add', {token: token}, {id: mov1.id})
      a.body.result.length.should.be.equal(1)
    })

    it('Should delete movie form list', async () => {
      const a = await util.sendPost(request(server), '/api/user/add', {token: token}, {id: mov1.id})
      a.body.result.length.should.be.equal(1)
      const b = await util.sendPost(request(server), '/api/user/remove', {token: token}, {id: mov1.id})
      b.body.result.length.should.be.equal(0)
    })

    it('Should add search to history', async () => {
      const a = await util.sendPost(request(server), '/api/user/add/history', {token: token}, {searchQuery: 'batman'})
      const b = await util.sendPost(request(server), '/api/user/add/history', {token: token}, {searchQuery: 'superman'})
      b.body.result.length.should.be.equal(2)
    })
  })
})
   