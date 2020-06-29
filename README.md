# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @username/lotide`

**Require it:**

`const _ = require('@username/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `function head()` : returns an array without the first element
* `function tail()` : returns an array without the last element
* `function middle()` : returns an array with the middle number or the two middle numbers in case the array have an odd number of elements
* `function flatten()` : returns a new array with all sub-array elements concatenated into it up to the specified depth
* `function indexPosition()` : return the index of the character that you ask for
* `function map()`: recreate the map function
* `function takeUntil()` : returns an array of number till you reach a certain number
* `function without()` : returns an array withtout a number
* `function findKeyByValue()` : returns the key by it's value
* `function findKey()` : returns a key
* `function eqArrays()` : assert two arrays
* `fucntion eqObjects()` : assert two objects
* `function countOnly()` : returns the count of a certain number
* `function countLetters()` : returns the count of a certain letter
* `function assertObjectsEquals ()` : assert two objects
* `function assertArrayEquals()` : assert two arrays
