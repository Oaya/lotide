const assert = require("chai").assert;
const letterPositions = require("../letterPositions");

describe("#letterPosition", () => {
  const sentence = "hey yo";

  it(`returns [1] for ("hey yo").e`, () => {
    assert.deepEqual(letterPositions(sentence).e, [1]);
  });

  it(`returns [2, 4] for ("hey yo"). `, () => {
    assert.deepEqual(letterPositions(sentence).y, [2, 4]);
  });

  it(`returns { h: [ 0 ], e: [ 1 ], y: [ 2, 4 ], o: [ 5 ] } for ("hey yo"). `, () => {
    assert.deepEqual(letterPositions("hey yo"), {
      h: [0],
      e: [1],
      y: [2, 4],
      o: [5],
    });
  });
});
