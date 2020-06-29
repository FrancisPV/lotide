let findKey = function(object, callbacks) {
  let result = [];
  for (let i in object) {
    if (callbacks(object[i])) {
      result.push(i)
      break;
    }
  }
  return result.join();
}

module.exports = findKey;
