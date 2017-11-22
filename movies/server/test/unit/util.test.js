const should = require('should')
const util = require('../../helpers/util')

/* Tests for crypto wrap. */
describe('crypto', () => {
  const date = 1511369742967

  it('Should format date correct', () => {
    util.formatFutureDate(date).should.equal("'2017-11-22'")
  })

  it('Should format date correct', () => {
    util.time(date).should.equal('17:55:42')
  })

  it('Should format date correct', () => {
    util.formatDate(date).should.equal('10_22_2017')
  })
})