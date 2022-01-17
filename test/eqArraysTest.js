const eqArrays = require("../eqArrays");
const assertEqual = require("../assertEqual");

eqArrays([], ["1", "2", "3", "4"]);
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 2, "3"], [1, 2, 3]), true);
