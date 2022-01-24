const assert = require("chai").assert;
const eqObjects = require("../eqObjects");

describe("#eqObjects", () => {
  const ab = { a: "1", b: "2" };
  const ba = { b: "2", a: "1" };
  const ca = { a: "1", b: "3" };
  const abc = { a: "1", b: "2", c: "3" };
  const az = { a: { z: 1 }, b: 2 };
  const ayz = { a: { y: 0, z: 1 }, b: 2 };

  it("return true compare ab and ba", () => {
    assert.isTrue(eqObjects(ab, ba));
  });

  it("return true compare ab and abc", () => {
    assert.isFalse(eqObjects(ab, abc));
  });

  it("return false when the compare ab and ca", () => {
    assert.isFalse(eqObjects(ab, ca));
  });

  it("return true when the compare abc and abc", () => {
    assert.isTrue(eqObjects(az, az));
  });

  it("return false when the compare ayz and ab", () => {
    assert.isFalse(eqObjects(ayz, ab));
  });

  it("return false when the compare az and ayz", () => {
    assert.isFalse(eqObjects(az, ayz));
  });
});
