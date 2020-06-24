const letterPositions = function(sentence) {
  const results = {};
  // logic to update results here
  return results;
};

const string = 'Lighthouse in the house'

const indexPosition = function(str) {
  let result = {};
  for (let i in str) {
    if (str[i] === ' ') {
      continue
    }
    if (result[str[i]]) {
      result[str[i]].push(Number((i)));
    } else {
      result[str[i]] = [Number(i)];
    }
  }
  return result;
}

console.log(indexPosition(string))