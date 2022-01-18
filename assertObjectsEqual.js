const assertEqual = require("./assertEqual");
const eqArrays = require("./eqArrays");

const eqObjects = function(object1, object2) {
  const key1 = Object.keys(object1);
  const key2 = Object.keys(object2);

  // They have the same number of keys
  if (key1.length !== key2.length) {
    return false;
  } else {
    // The value for each key in one object is the same as the value
    // for that same key in the other object
    for (const key of key1) {
      let newObject1 = object1[key];
      let newObject2 = object2[key];

      if (Array.isArray(newObject1) && Array.isArray(newObject2)) {
        return eqArrays(newObject1, newObject2);
      } else {
        if (newObject1 !== newObject2) {
          return false;
        }
      }
      return true;
    }
  }
};

const assertObjectsEqual = (actual, expected) => {
  const inspect = require("util").inspect;
  if (eqObjects(actual, expected)) {
    console.log(
      `✅✅✅ Assertion Passed: ${inspect(actual)} ===  ${inspect(expected)}`
    );
  } else {
    console.log(
      `🛑🛑🛑 Assertion Failed: ${inspect(actual)} !==  ${inspect(expected)}`
    );
  }
};

module.exports = assertObjectsEqual;
