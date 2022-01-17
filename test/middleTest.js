const assertArraysEqual = require("../assertArraysEqual");
const middle = require("../middle");

console.log(middle([1, 2, 5, 9, 4, 5]));
assertArraysEqual(middle([1, 2, 5, 9, 4, 5]), [5, 9]);
