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
  return `✅✅✅ Assertion Passed: ${firstArray} === ${secondArray}`;
}

let flatten = function(arrays) {
  filteredArray = [];
  flattenedArray = [];
  for (let i = 0; i < arrays.length; i++) {
    //console.log(arrays[i]);
    if (Array.isArray(arrays[i])) {
      filteredArray.push(arrays[i])
    } else {
      flattenedArray.push(arrays[i])
    }
    for (let j = 0; j < arrays[i].length; j++) {
      //console.log(arrays[i][j]);
      flattenedArray.push(arrays[i][j]);
    }
  }
  return flattenedArray
}

console.log(flatten([1, 2, [3, 4], 5, [6]])) // => [1, 2, 3, 4, 5, 6]