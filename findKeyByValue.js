const assertEqual = require("./assertEqual");

const findKeyByValue = (show, expectedShow) => {
  for (const genre in show) {
    if (expectedShow === show[genre]) {
      return genre;
    } else {
      undefined;
    }
  }
};

module.exports = findKeyByValue;
