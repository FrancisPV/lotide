/* const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: "${actual}" !== "${expected}"`);
  }
}; */

const eqObjects = function(object1, object2) {
  // key = a, value = 1
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false
  }

  for (let [key, valueFromObject1] of Object.entries(object1)) {
    const valueFromObject2 = object2[key]

    if (valueFromObject1 !== valueFromObject2) {
      return false;
    }
  }

  return true;
}

/* const eqObjects = function(object1, object2) {
  // key = a, value = 1
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);

  if (keys1.length !== keys2.length) return false;

  for (const key of keys1) {
    if (object1[key] !== object2[key]) {
      return false;
    }
  }

  return true;
} */


const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
console.log(eqObjects(ab, ba)); // => true

const abc = { a: "1", b: "2", c: "3" };
console.log(eqObjects(ab, abc)); // => false 