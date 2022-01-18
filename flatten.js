const assertArraysEqual = require("./assertArraysEqual");
const eqArrays = require("./eqArrays");

const mapThrough = (array) => {
  const newArray = [];
  for (let i = 0; array.length > i; i++) {
    if (!Array.isArray(array[i])) {
      newArray.push(array[i]);
    }
    for (let j = 0; array[i].length > j; j++) {
      newArray.push(array[i][j]);
    }
  }
  return newArray;
};
const flatten = (array) => {
  let newArray = [];
  if (array === []) {
    return false;
  }

  newArray = mapThrough(array);
  return newArray;
};

module.exports = flatten;
