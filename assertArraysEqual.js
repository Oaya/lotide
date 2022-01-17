const eqArrays = require("./eqArrays");

const assertArraysEqual = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    console.log(`🔴🔴🔴 Comparison Failed: ${arr1} !== ${arr2}`);
    return false;
  }
  if (arr1 === [] || arr2 === []) {
    console.log(`🔴🔴🔴 Comparison Failed: ${arr1} !== ${arr2}`);
    return false;
  }
  for (let i = 0; arr1.length > i; i++) {
    if (arr1[i] !== arr2[i]) {
      console.log(`🔴🔴🔴 Comparison Failed: ${arr1} !== ${arr2}`);
      return false;
    }
  }
  console.log(`✅✅✅ Comparison Passed: ${arr1} === ${arr2}`);
  return true;
};

module.exports = assertArraysEqual;
