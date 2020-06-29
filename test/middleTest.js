const assertEqual = require('../assertEqual');
const assertArrayEquals = require('../assertArrayEquals');
const middle = require('../middle');
const eqArrays = require('../eqArrays');

assertArrayEquals(middle([1]), [1, 2, 3, 4]) // => []
assertArrayEquals(middle([1, 2]), []) // => []
assertArrayEquals(middle([1, 2, 3]), [2])// => [2]
assertArrayEquals(middle([1, 2, 3, 4, 5]), [3]) // => [3]
assertArrayEquals(middle([1, 2, 3, 4]), [2, 3]) // => [2, 3]
assertArrayEquals(middle([1, 2, 3, 4, 5, 6]), [3, 4]) // => [3, 4]

// '' === '' -> true
// [] === [] -> false
