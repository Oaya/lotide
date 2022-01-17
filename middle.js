const eqArrays = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return false;
  }

  if (arr1 === [] || arr2 === []) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

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

const middle = (array) => {
  const result = [];
  middleIndex = Math.floor(array.length / 2);
  console.log(index);

  //return an empty if the array length is one or two//
  if (array.length <= 2) {
    return result;
  }
  //array length is odd number//
  if (array.length % 2 === 1) {
    result.push(array[index]);
  }
  //array length is even number//
  if (array.length % 2 === 0) {
    //get middle two index//
    result.push(array[index - 1], array[index]);
  }
  return result;
};
console.log(middle([1, 2, 5, 9, 4, 5]));
console.log(assertArraysEqual(middle([1, 2, 5, 9, 4, 5]), [5, 9]));
console.log(eqArrays(middle([1, 2, 5, 9, 4, 5]), [5, 9]));
