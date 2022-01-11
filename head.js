const head = function (array) {
  if (array === []) {
    return undefined;
  }
  return array[0];
};

const assertEqual = function (actual, expected) {
  console.log(actual, expected);
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

assertEqual(head([1]));
// assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
