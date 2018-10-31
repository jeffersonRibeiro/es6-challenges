const assert = require('assert');
const multiplyBy = require('./defaultParams').multiplyBy;

describe('Challenge 7', () => {
  describe('multiplyBy()', () => {
    it('should return 4 for multiplyBy(2)', () => {
      assert.equal(multiplyBy(2), 4);
    })

    it('should return 4 for multiplyBy(2)', () => {
      assert.equal(multiplyBy(2, undefined), 4);
    })

    it('should return 0 for multiplyBy(2, 0)', () => {
      assert.equal(multiplyBy(2, 0), 0);
    })

    it('should return 50 for multiplyBy(5, 10)', () => {
      assert.equal(multiplyBy(5, 10), 50);
    })
  })
})