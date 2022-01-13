const assertEqual = function (actual, expected) {
  if (actual !== expected) {
    console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
  } else {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  }
};

const eqArrays = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return false;
  } else if (arr1 === [] || arr2 === []) {
    return false;
  } else {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    }
    return true;
  }
};

const eqObjects = function (object1, object2) {
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

      console.log(newObject1, newObject2);
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
    console.log(`✅✅✅ Assertion Passed: ${actual} ===  ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !==  ${expected}`);
  }
};
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba), true);
const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), false);

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true);

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false);
