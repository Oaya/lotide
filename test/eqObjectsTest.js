const assert = require("chai").assert;
const eqObjects = require("../eqObjects");

describe("#eqObjects", () => {
  const ab = { a: "1", b: "2" };
  const ba = { b: "2", a: "1" };
  const ca = { a: "1", b: "3" };
  const abc = { a: "1", b: "2", c: "3" };

  it("return true compare ab and ba", () => {
    assert.isTrue(eqObjects(ab, ba));
  });

  it("return true compare ab and ba", () => {
    assert.isFalse(eqObjects(ab, abc));
  });

  it("return false when the compare ab and ca", () => {
    assert.isFalse(eqObjects(ab, ca));
  });
});
