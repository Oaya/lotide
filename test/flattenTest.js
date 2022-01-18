const assert = require("chai").assert;
const flatten = require("../flatten");

describe("#flatten", () => {
  it("return [1, 2, 3, 4, 5, 6] for[1, 2, [3, 4], 5, [6]]", () => {
    assert.deepEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
  });

  it("return [1, 2, 3, 4, 5, 6] for [1, 2, 3, 4, 5, 6]", () => {
    assert.deepEqual(flatten([1, 2, 3, 4, 5, 6]), [1, 2, 3, 4, 5, 6]);
  });

  it("return false for [] ", () => {
    assert.isFalse(flatten([]));
  });

  it("return false for not array ", () => {
    assert.isFalse(flatten(1));
  });
});

flatten([1, 2, [3, 4], 5, [6]]);
