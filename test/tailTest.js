/* const assertEqual = require('../assertEqual');
const tail = require('../tail'); */

const assert = require('chai').assert;
const tail = require('../tail');

describe("#middle", () => {
  it("returns an empty array when giving an array of 1 element", () => {
    assert.isEmpty(tail([1]), []);
  });
  it("returns [1, 2] when passing [1, 2, 3]", () => {
    assert.deepEqual(tail([1, 2, 3]), [1, 2])
  });
});

/* const result = tail(["Hello"]);
const words = ['dog'];
tail(words);
assertEqual(result, ["Lighthouse", "Labs"]); // => will always fail!
assertEqual(words.length, 0); // original array should still have 3 elements! */