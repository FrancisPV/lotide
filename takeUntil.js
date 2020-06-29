const takeUntil = function(array, callback) {
  let result = [];
  for (let i of array) {
    if (!callback(i)) {
      result.push(i)
    }
    else if (callback(i)) {
      break;
    }
  }
  return result;
}

module.exports = takeUntil;