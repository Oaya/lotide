const assertEqual = function (actual, expected) {
  if (actual !== expected) {
    return console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
  }
  console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
};

module.exports = assertEqual;
