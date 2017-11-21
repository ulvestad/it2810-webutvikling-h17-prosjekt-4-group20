const should = require('should')
require('dotenv').config()

const crypto = require('../../helpers/crypto')

/* Tests for crypto wrap. */
describe('crypto', () => {

  const data = {user: 'a'}
  const password = 'password'
  const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InVzZXIiOiJhIn0sImV4cCI6MTUxMTYyMzU2MywiaWF0IjoxNTExMDE4NzYzfQ.iBkqAu7QYatn1y406wC4a8JYLbEc1J0josmet9KTaE8'
  const hash = '$2a$10$mIU1157mJs9mkZ/BukA4aOVZVooPi220llJWrZ8YKaRfgQBS2v2cC'

  it('Should create token', () => {
    const a = crypto.createToken(data)
    should.exist(a)
  })

  it('Should decode token', () => {
    const a = crypto.decodeToken(token)
    should.exist(a)
    a.data.user.should.equal(data.user)
  })

  it('Should hash', async () => {
    const a = await crypto.hash(password)
    should.exist(a)
  })

  it('Should compare', async () => {
    const a = await crypto.comparePassword(password, hash)
    const b = await crypto.comparePassword('wrong', hash)
    a.should.equal(true)
    b.should.equal(false)
  })

})


