const assertEqual = function(actual, expected) {
  if (actual === undefined) {
    console.log(`🈳🈳🈳  Assertion Failed: Array is empty`);
  } else if (expected === undefined) {
    console.log(`❌❌❌ Assertion Failed: Can't find the expected value.`);
  } else if (actual !== expected) {
    console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
  } else {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  }
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

const words = [];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!
