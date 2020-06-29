
let assertArrayEquals = function(firstArray, secondArray) {
  if (firstArray.length !== secondArray.length) {
    console.log(`🛑🛑🛑 Assertion Failed: "${firstArray.join(',')}" !== "${secondArray.join(',')}"`);
  }
  for (let i = 0; i < firstArray.length; i++) {
    if (firstArray[i] !== secondArray[i]) {
      console.log(`🛑🛑🛑 Assertion Failed: "${firstArray.join(',')}" !== "${secondArray.join(',')}"`);
    }
  }
  console.log(`✅✅✅ Assertion Passed: ${firstArray.join(',')} === ${secondArray.join(',')}`);
}

module.exports = assertArrayEquals





