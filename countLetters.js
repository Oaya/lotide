const assertEqual = function (actual, expected) {
  console.log(actual);
  if (actual !== expected) {
    console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
  } else {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  }
};

const countLetters = (str) => {
  //take the empty spaces from the string//
  str = str.split(" ").join("");

  const result = {};
  //go through eash value in the string//
  for (const letter of str) {
    //check letter of key is exist in the result//
    // there is no then, create new object with key //
    if (!result[letter]) {
      result[letter] = 1;
    } else {
      // if exists, add value to it//
      result[letter] += 1;
    }
  }
  return result;
};
console.log(countLetters("lighthouse in the house"));
assertEqual(countLetters("lighthouse in the house"), undefined);
assertEqual(countLetters("lighthouse in the house"), {
  l: 1,
  i: 2,
  g: 1,
  h: 4,
  t: 2,
  o: 2,
  u: 2,
  s: 2,
  e: 3,
  n: 1,
});
