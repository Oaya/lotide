const tail = function (array) {
  let newArray = [];
  if (array === [] || array.length === 1) {
    return newArray;
  } else
    for (let i = 1; array.length > i; i++) {
      newArray.push(array[i]);
    }
  return newArray;
};

module.exports = tail;
