const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: "${actual}" !== "${expected}"`);
  }
};


let countLetters = function(lettersCount) {
  resultLettersCount = {};
  for (let letter of lettersCount) {
    if (letter === ' ') {
      continue;
    }
    if (resultLettersCount[letter] === undefined) { //resultLettersCount.hasOwnProperty(letter) === false
      resultLettersCount[letter] = 0
    }
    resultLettersCount[letter]++
  }
  return resultLettersCount
}

console.log(countLetters("lighthouse in the house"))
