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
  head:   head,
  tail:   tail,
  middle: middle,
  flatten: flatten,
  indexPosition: indexPosition,
  map: map,
  takeUntil: takeUntil,
  without: without,
  findKeyByValue: findKeyByValue,
  findKey: findKey,
  eqArrays: eqArrays,
  eqObjects: eqObjects,
  countOnly: countOnly,
  countLetters: countLetters,
  assertObjectsEquals: assertObjectsEquals,
  assertArrayEquals: assertArrayEquals
};