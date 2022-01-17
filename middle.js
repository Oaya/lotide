const middle = (array) => {
  const result = [];
  middleIndex = Math.floor(array.length / 2);

  //return an empty if the array length is one or two//
  if (array.length <= 2) {
    return result;
  }
  //array length is odd number//
  if (array.length % 2 === 1) {
    result.push(array[middleIndex]);
  }
  //array length is even number//
  if (array.length % 2 === 0) {
    //get middle two index//
    result.push(array[middleIndex - 1], array[middleIndex]);
  }
  return result;
};

module.exports = middle;
