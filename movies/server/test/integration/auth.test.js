const request = require('supertest')
const should = require('should')
const server = require('./../../../server.js')

const util = require('../util')
const db = require('../../helpers/db')

/* Integration tests for servers user api */
describe('user', () => {
  let server
  const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjoiYW5keSIsImV4cCI6MTUxMTk2OTE1MywiaWF0IjoxNTExMzY0MzUzfQ.xOP2YruwynAFNeSkOjp1QPESFsXGLVevHDDA2wRmfQM'
  const decoded = { username: 'andy', iat: 1509045962 }
  const data = {
    username: 'andy', 
    email: 'andy@gmail.com', 
    password: '123456789',
    confirm: '123456789',
    hash: '$2a$10$loDIe1WqX0zu4/YvtSjYfOTJ9WBc0xu9Etbd7AP2.CAWh8JoRGEt2'
  }

  before(async () => {
    server = require('../../../server')
    await db.dumpUsers()
  })

  afterEach(async () => {
    await db.dumpUsers()
    await db.saveUser(data)
  })

  after(async () => {
    server.close()
    await db.dumpUsers()
  })

  it('Should connect to api', async () => {
    const a = await util.sendGet(request(server), '/api', {}, {})
    a.body.msg.should.equal('api')
  })

  /* Register tests */
  describe('register', () => {
    it('Should fail no username', async () => {
      const a = await util.sendPost(request(server), '/api/register', {}, {...data, username:''})
      a.body.success.should.equal(false)
    })

    it('Should fail no email', async () => {
      const a = await util.sendPost(request(server), '/api/register', {}, {...data, email:''})
      a.body.success.should.equal(false)
    })

    it('Should fail no password', async () => {
      const a = await util.sendPost(request(server), '/api/register', {}, {...data, password:''})
      a.body.success.should.equal(false)
    })

    it('Should fail user exist', async () => {
      const a = await util.sendPost(request(server), '/api/register', {}, {...data})
      a.body.success.should.equal(false)
    })

    it('Should fail email exist', async () => {
      const a = await util.sendPost(request(server), '/api/register', {}, {...data, username: 'johan'})
      a.body.success.should.equal(false)
    })

    it('Should success', async () => {
      const a = await util.sendPost(request(server), '/api/register', {}, { ...data, username: 'johan', email: 'andy@hotmail.com'})
      a.body.success.should.equal(true)
    })
  })

  /* Login tests */
  describe('login', () => {
    it('Should fail no username', async () => {
      const a = await util.sendPost(request(server), '/api/login', {}, {...data, username:''})
      a.body.success.should.equal(false)
    })

    it('Should fail no password', async () => {
      const a = await util.sendPost(request(server), '/api/login', {}, {...data, password:''})
      a.body.success.should.equal(false)
    })

    it('Should fail no user', async () => {
      const a = await util.sendPost(request(server), '/api/login', {}, {...data, username: 'johan'})
      a.body.success.should.equal(false)
    })

    it('Should fail wrong password', async () => {
      const a = await util.sendPost(request(server), '/api/login', {}, {...data, password: 'wrong'})
      a.body.success.should.equal(false)
    })

    it('Should success logged in', async () => {
      const a = await util.sendPost(request(server), '/api/login', {}, {...data})
      a.body.success.should.equal(true)
    })
  })

  /* Middleware tests */
  describe('middleware', () => {
    it('Should fail no token', async () => {
      const a = await util.sendGet(request(server), '/api/user', {})
      a.body.success.should.equal(false)
    })

    it('Should fail wrong token', async () => {
      const a = await util.sendGet(request(server), '/api/user', {token: 'wrong'})
      a.body.success.should.equal(false)
    })

    it('Should success', async () => {
      const a = await util.sendGet(request(server), '/api/user', {token: token})
      a.body.success.should.equal(true)
    })
  })
})
   