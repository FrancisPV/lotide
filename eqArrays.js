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
module.exports = eqArrays;

