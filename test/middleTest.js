const assert = require('chai').assert;
const middle   = require('../middle');

describe("#middle", () => {
  it("returns an empty array when giving an array of 1 number", () => {
    assert.isEmpty(middle([1]), []);
  });
  it("returns an empty array when giving an array of two numbers", ()  => {
    assert.isEmpty(middle([1, 2]), []); 
  }); 
  it("returns 2 when passing [1, 2, 3]", () => {
    assert.equal(middle([1, 2, 3]), 2)
  })
  it("returns [2, 3] when passing [1, 2, 3, 4]", () => {
    assert.equal[middle([1, 2, 3, 4]), [2, 3]]
  });
});



