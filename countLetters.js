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

module.exports = countLetters;
