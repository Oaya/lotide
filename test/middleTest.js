const assert = require("chai").assert;
const middle = require("../middle");

describe("#middle", () => {
  it("returns [5, 9] for [1, 2, 5, 9, 4, 5]", () => {
    assert.deepEqual(middle([1, 2, 5, 9, 4, 5]), [5, 9]);
  });

  it("returns [5] for [1, 2, 5, 9, 5]", () => {
    assert.deepEqual(middle([1, 2, 5, 9, 5]), [5]);
  });

  it("returns [] for []", () => {
    assert.deepEqual(middle([]), []);
  });

  it("returns [] for [1]", () => {
    assert.deepEqual(middle([1]), []);
  });

  it("returns [] for [1, 2]", () => {
    assert.deepEqual(middle([1, 2]), []);
  });
});
