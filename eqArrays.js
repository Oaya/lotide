const assertEqual = function (actual, expected) {
  if (actual !== expected) {
    console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
  } else {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  }
};

function eqArrays(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  if (arr1 === [] || arr2 === []) {
    return false;
  }
  let i = arr1.length;
  while (i--) {
    if (arr1[i] !== arr2[i]) {
      return false;
    } else {
      return true;
    }
  }
}

assertEqual("book", "book");
console.log(eqArrays([], ["1", "2", "3", "4"]));
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 2, "3"], [1, 2, 3]), true);
