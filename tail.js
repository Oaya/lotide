const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    return console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
  }
  console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
};

const tail = function(array) {
  let newArray = [];
  if (array === [] || array.length === 1) {
    return newArray;
  } else
    for (let i = 1; array.length > i; i++) {
      newArray.push(array[i]);
    }
  return newArray;
};

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3);

module.exports = tail;
