const assertArrayEquals = require('../assertArrayEquals');

assertArrayEquals([1, 2, 3], [1, 2, 3]); // => true
assertArrayEquals([1, 1, 3], [1, 2, 3]); // => false
assertArrayEquals([1, 2, 3], [1, 2, 3, 4]);// => false
assertArrayEquals([1, 2, 3], [3, 2, 1]);// => false