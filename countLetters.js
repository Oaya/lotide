const assertEqual = require("./assertEqual");

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

module.exports = countLetters;
