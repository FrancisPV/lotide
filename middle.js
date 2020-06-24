let eqArrays = function(firstArray, secondArray) {
  for (let i = 0; i < firstArray.length; i++) {
    if (firstArray[i] !== secondArray[i]) {
      return false
    } else if (firstArray.length !== secondArray.length) {
      return false
    }
  }
  return true
}

let assertArraysEquals = function(firstArray, secondArray) {
  for (let i = 0; i < firstArray.length; i++) {
    if (firstArray[i] !== secondArray[i]) {
      console.log(`🛑🛑🛑 Assertion Failed: "${firstArray}" !== "${secondArray}"`);
    } else if (firstArray.length !== secondArray.length) {
      console.log(`🛑🛑🛑 Assertion Failed: "${firstArray}" !== "${secondArray}"`);
  }
    }
    return`✅✅✅ Assertion Passed: ${firstArray} === ${secondArray}`;
}

let middle = function(numbers){
  let resultArray = [];
    if(numbers.length < 3){
      return [];
    } else if(numbers.length % 2 === 0) {
      resultArray.push(numbers.length / 2)
      resultArray.push(numbers.length / 2 + 1)
    } else {
      resultArray.push(Math.ceil(numbers.length / 2))
    }
    return resultArray
  }
  


console.log(middle([1])) // => []
console.log(middle([1, 2])) // => []
console.log(middle([1, 2, 3]))// => [2]
console.log(middle([1, 2, 3, 4, 5])) // => [3]
console.log(middle([1, 2, 3, 4])) // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])) // => [3, 4]