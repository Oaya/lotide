const assertEqual = require("./assertEqual");

const findKey = (obj, callback) => {
  for (const val in obj) {
    if (callback(obj[val])) {
      return val;
    } else {
      return undefined;
    }
  }
};

module.exports = findKey;
