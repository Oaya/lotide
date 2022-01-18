const assertArraysEqual = require("./assertArraysEqual");
const eqArrays = require("./eqArrays");

const takeUntil = (array, callback) => {
  const result = [];

  for (const item of array) {
    if (callback(item)) {
      return result;
    } else {
      result.push(item);
    }
  }
  return result;
};

module.exports = takeUntil;
