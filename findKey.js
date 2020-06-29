const planet = {
  "Blue Hill": { stars: 1 },
  "Akaleri": { stars: 3 },
  "noma": { stars: 2 },
  "elBulli": { stars: 3 },
  "Ora": { stars: 2 },
  "Akelarre": { stars: 3 },
}

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
