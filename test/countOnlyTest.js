const assert = require("chai").assert;
const countOnly = require("../countOnly");

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe",
];

const obj = {
  Jason: true,
  Karima: true,
  Fang: true,
  Agouhanna: false,
};

describe("#countOnly ", () => {
  it(`returns { Jason: 1 } for { Jason: true }`, () => {
    assert.deepEqual(countOnly(firstNames, { Jason: true }), { Jason: 1 });
  });

  it(`returns {} for karima`, () => {
    assert.deepEqual(countOnly(firstNames, obj["Karima"]), {});
  });

  it(`returns {} for { Agouhanna: false } `, () => {
    assert.deepEqual(countOnly(firstNames, { Agouhanna: false }), {});
  });
});
