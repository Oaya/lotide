const letterPositions = (sentence) => {
  const result = {};
  //go through the sentence//
  for (let i = 0; sentence.length > i; i++) {
    //if the sentence[i] is space not check//
    if (sentence[i] === " ") {
      result;
    }
    //check if sentence[i] is exsits in the result//
    else if (!result[sentence[i]]) {
      result[sentence[i]] = [i];
    } else {
      result[sentence[i]].push(i);
    }
  }

  return result;
};
console.log(letterPositions("hey yo"));
module.exports = letterPositions;
