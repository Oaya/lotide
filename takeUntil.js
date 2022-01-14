const assertArraysEqual = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    console.log(`🔴🔴🔴 Comparison Failed: ${arr1} !== ${arr2}`);
    return false;
  }
  if (arr1 === [] || arr2 === []) {
    console.log(`🔴🔴🔴 Comparison Failed: ${arr1} !== ${arr2}`);
    return false;
  }
  for (let i = 0; arr1.length > i; i++) {
    if (arr1[i] !== arr2[i]) {
      console.log(`🔴🔴🔴 Comparison Failed: ${arr1} !== ${arr2}`);
      return false;
    } else {
      console.log(`✅✅✅ Comparison Passed: ${arr1} === ${arr2}`);
      return true;
    }
  }
};

const eqArrays = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return false;
  } else if (arr1 === [] || arr2 === []) {
    return false;
  } else {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    }
    return true;
  }
};

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
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, (x) => x < 0);
console.log(results1);

const data2 = [
  "I've",
  "been",
  "to",
  "Hollywood",
  ",",
  "I've",
  "been",
  "to",
  "Redwood",
];
const results2 = takeUntil(data2, (x) => x === ",");
console.log(results2);

assertArraysEqual(results1, [1, 2, 5, 7, 2]);
assertArraysEqual(results2, ["I've", "been", "to", "Hollywood"]);
console.log(eqArrays(results1, [1, 2, 5, 7, 2]));
