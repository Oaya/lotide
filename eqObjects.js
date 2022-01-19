const eqArrays = require("./eqArrays");

const eqObjects = function (object1, object2) {
  const key1 = Object.keys(object1);
  const key2 = Object.keys(object2);

  // They have the same number of keys
  if (key1.length !== key2.length) {
    return false;
  }
  // The value for each key in one object is the same as the value
  // for that same key in the other object
  for (const key of key1) {
    let newObject1 = object1[key];
    let newObject2 = object2[key];

    if (Array.isArray(newObject1) && Array.isArray(newObject2)) {
      if (!eqArrays(newObject1, newObject2)) {
        return false;
      }
    }
    if (newObject1 !== newObject2) {
      return false;
    }
  }
  return true;
};

module.exports = eqObjects;
