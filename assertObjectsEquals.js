const assertObjectsEquals = function(actual, expected) {
  const inspect = require('util').inspect;
  if (Object.keys(actual).length !== Object.keys(expected).length) {
    return `🛑🛑🛑 Assertion Failed: "${inspect(actual)}" !== "${inspect(expected)}"`;
  }

  for (let [key, valueFromObject1] of Object.entries(actual)) {
    const valueFromObject2 = expected[key]

    if (valueFromObject1 !== valueFromObject2) {
      return `🛑🛑🛑 Assertion Failed: "${inspect(actual)}" !== "${inspect(expected)}"`;
    }
  }

  return `✅✅✅ Assertion Passed: "${inspect(actual)}" === ${inspect(expected)}`;
}

module.exports = assertObjectsEquals;