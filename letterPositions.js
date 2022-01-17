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

const letterPositions = (sentence) => {
  const result = {};
  //go through the sentence//
  for (let i = 0; sentence.length > i; i++) {
    //if the sentence[i] is space not check//
    if (sentence[i] === " ") {
      result;
    }
    //check if sentence[i] is exsits in the result//
    if (!result[sentence[i]]) {
      result[sentence[i]] = [i];
    } else {
      result[sentence[i]].push(i);
    }
  }

  return result;
};

letterPositions("lighthouse in the house");
assertArraysEqual(letterPositions("lighthouse in the house").e, [9, 16, 22]);
console.log(eqArrays(letterPositions("hello").e, [1]));
