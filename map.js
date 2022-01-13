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

const words = ["ground", "control", "to", "major", "tom"];

const map = function (array, callback) {
  const result = [];
  for (let item of array) {
    result.push(callback(item));
  }
  return result;
};

const results1 = map(words, (word) => word[0]);
console.log(results1);

assertArraysEqual(results1, ["g", "c", "t", "m", "t"]);
