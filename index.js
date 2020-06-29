const head   = require('./head');
const tail   = require('./tail');
const middle = require('./middle');
const flatten = require('./flatten');
const indexPosition = require('./indexPosition');
const map = require('./map');
const takeUntil = require('./takeUntil')
const without = require('./without')
const findKeyByValue = require('./findKeyByValue')
const findKey = require('./findKey')
const eqArrays = require('./eqArrays')
const eqObjects = require('./eqObjects')
const countOnly = require('./countOnly')
const countLetters = require('./countLetters')
const assertObjectsEquals = require('./assertObjectsEquals')
const assertArrayEquals = require('./assertArrayEquals')

module.exports = {
  head,
  tail,
  middle,
  flatten,
  indexPosition,
  map,
  takeUntil,
  without,
  findKeyByValue,
  findKey,
  eqArrays,
  eqObjects,
  countOnly,
  countLetters,
  assertObjectsEquals,
  assertArrayEquals
};