const assert = require("chai").assert;
const letterPositions = require("../letterPositions");

describe("#letterPosition", () => {
  const sentence = "hey yo";

  it(`returns [1] for ("hey yo").e`, () => {
    assert.deepEqual(letterPositions(sentence).e, [1]);
  });

  it(`returns {} for ("hey yo"). `, () => {
    assert.deepEqual(letterPositions(sentence).y, [2, 4]);
  });

  //check when the charactor is space, return {}
  // it(`returns {} for ("hey yo"). `, () => {
  //   assert.deepEqual(letterPositions("hello")., {});
  // });
});
