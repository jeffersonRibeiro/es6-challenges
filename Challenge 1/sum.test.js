const sum = require('./sum');
const assert = require('assert');

describe('Challenge 1', () => {
  describe('sum()', () => {
    it('should return 4 when sum(1, 3)', () => {
      assert.equal(sum(1, 3), 4);
    });
  
    it('should return 35 when sum(10, 20, 5)', () => {
      assert.equal(sum(10, 20, 5), 35);
    });
  
    it('should return 110 when sum(2, 5, 80, 1, 10, 12)', () => {
      assert.equal(sum(2, 5, 80, 1, 10, 12), 110);
    });
  });
});
