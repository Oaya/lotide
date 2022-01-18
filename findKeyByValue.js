const findKeyByValue = (show, expectedShow) => {
  for (const genre in show) {
    if (expectedShow === show[genre]) {
      return genre;
    }
  }
};

module.exports = findKeyByValue;
