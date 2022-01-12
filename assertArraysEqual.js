const assertArraysEqual = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    console.log(`🔴🔴🔴 Comparison Failed: ${arr1} !== ${arr2}`);
    return false;
  }
  if (arr1 === [] || arr2 === []) {
    console.log(`🔴🔴🔴 Comparison Failed: ${arr1} !== ${arr2}`);
    return false;
  }
  let i = arr1.length;
  while (i--) {
    if (arr1[i] !== arr2[i]) {
      console.log(`🔴🔴🔴 Comparison Failed: ${arr1} !== ${arr2}`);
      return false;
    } else {
      console.log(`✅✅✅ Comparison Passed: ${arr1} === ${arr2}`);
      return true;
    }
  }
};

assertArraysEqual([1, 2, "3"], [1, 2, 3]);
