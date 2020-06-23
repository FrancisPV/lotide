/* let eqArrays = function(firstArray, secondArray) {
  for (let i = 0; i < firstArray.length; i++) {
    if (firstArray[i] !== secondArray[i]) {
      console.log(`🛑🛑🛑 Assertion Failed: "${firstArray}" !== "${secondArray}"`);
    } else if (firstArray.length !== secondArray.length) {
      console.log(`🛑🛑🛑 Assertion Failed: "${firstArray}" !== "${secondArray}"`);
  }
    }
    return`✅✅✅ Assertion Passed: ${firstArray} === ${secondArray}`;
}

let eqArrays = function(firstArray, secondArray) {
  for (let i = 0; i < firstArray.length; i++) {
    if (firstArray[i] !== secondArray[i]) {
      console.log(`🛑🛑🛑 Assertion Failed: "${firstArray}" !== "${secondArray}"`);
    } else if (firstArray.length !== secondArray.length) {
      console.log(`🛑🛑🛑 Assertion Failed: "${firstArray}" !== "${secondArray}"`);
  }
    }
    return`✅✅✅ Assertion Passed: ${firstArray} === ${secondArray}`;
} */

let without = function(firstArray, secondArray) {
  let removedElements = [];
  for (let i = 0; i < firstArray.length; i++) {
    if (firstArray[i] !== secondArray[i]) {
      removedElements.push(firstArray[i]);
    }
  }
  return removedElements
}

console.log(without([1, 2, 3], [1])) // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"]))