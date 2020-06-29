const assertEqual = require('../assertEqual');
const tail = require('../tail');

const result = tail(["Hello"]);
const words = ['dog'];
tail(words);
assertEqual(result, ["Lighthouse", "Labs"]); // => will always fail!
assertEqual(words.length, 0); // original array should still have 3 elements!