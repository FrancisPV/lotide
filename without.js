let without = function(firstArray, secondArray) {
  let removedElements = [];
  for (let i = 0; i < firstArray.length; i++) {
    if (firstArray[i] !== secondArray[i]) {
      removedElements.push(firstArray[i]);
    }
  }
  return removedElements
}

module.exports = without;