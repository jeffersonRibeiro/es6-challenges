const assert = require('assert');
const mult = require('./arrowFunctions').mult;

describe('Challenge 6', () => {
  describe('mult()', () => {
    it('should return 50 for mult(5, 10)', () => {
      assert.equal(mult(5, 10), 50);
    })
  })

  describe('mult() async', () => {
    it('should return 10 for mult(5, 2)', done => {
      setTimeout(() => {
        assert.equal(mult(5, 2), 10);
        done();
      }, 1000)
    })
  })
})
