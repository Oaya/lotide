const assertArraysEqual = require("./assertArraysEqual");
const eqArrays = require("./eqArrays");

const without = (source, itemToRemove) => {
  let newArray = source;
  for (let i = 0; source.length > i; i++) {
    for (let j = 0; itemToRemove.length > j; j++) {
      if (source[i] === itemToRemove[j]) {
        newArray.splice(i, 1);
      }
    }
  }
  return newArray;
};

module.exports = without;
