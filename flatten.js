const flatten = (array) => {
  const newArray = [];
  if (array === []) {
    return false;
  }

  for (let i = 0; array.length > i; i++) {
    if (Array.isArray(array[i])) {
      for (let j = 0; array[i].length > j; j++) {
        newArray.push(array[i][j]);
      }
    } else {
      newArray.push(array[i]);
    }
  }
  console.log(newArray);
  return newArray;
};
flatten([1, 2, [3, 4], 5, [6]]);
