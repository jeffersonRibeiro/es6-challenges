const assert = require('assert');
const isNumber = require('./ternary').isNumber;

describe('Challenge 5', () => {
  describe('isNumber()', () => {
    it('should return "That\'s number" for isNumber(10)', () => {
      assert.equal(isNumber(10), 'That\'s number');
    })
  
    it('should return "That\'s not a number" for isNumber("Hey there")', () => {
      assert.equal(isNumber("Hey there"), 'That\'s not a number');
    })
  
    it('should return "That\'s not a number" for isNumber(true)', () => {
      assert.equal(isNumber(true), "That\'s not a number");
    })
  })
})
