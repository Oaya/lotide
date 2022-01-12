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

const without = (source, itemToRemove) => {
  let newArray = source;
  for (let i = 0; source.length > i; i++) {
    for (let j = 0; itemToRemove.length > j; j++) {
      if (source[i] === itemToRemove[j]) {
        newArray.splice(i, 1);
      }
    }
  }
  return newArray;
};
