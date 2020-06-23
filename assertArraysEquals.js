/*  const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: "${actual}" !== "${expected}"`);
  }
}; */
 


let eqArrays = function(firstArray, secondArray) {
  for (let i = 0; i < firstArray.length; i++) {
    if (firstArray[i] !== secondArray[i]) {
      console.log(`🛑🛑🛑 Assertion Failed: "${firstArray}" !== "${secondArray}"`);
    } else if (firstArray.length !== secondArray.length) {
      console.log(`🛑🛑🛑 Assertion Failed: "${firstArray}" !== "${secondArray}"`);
  }
    }
    return`✅✅✅ Assertion Passed: ${firstArray} === ${secondArray}`;
}

  




console.log(eqArrays([1, 2, 3], [1, 2, 3])) // => true
console.log(eqArrays([1, 1, 3], [1, 2, 3])) // => false
console.log(eqArrays([1, 2, 3], [1, 2, 3, 4])) // => false
console.log(eqArrays([1, 2, 3], [3, 2, 1]))// => false