const assert = require("chai").assert;
const findKeyByValue = require("../findkeyByValue");

describe("#findKeyByValue", () => {
  const bestTVShowsByGenre = {
    sci_fi: "The Expanse",
    comedy: "Brooklyn Nine-Nine",
    drama: "The Wire",
  };
  it("return drama for the Wire from bestTVshowsyCenre", () => {
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
  });

  it("return undefined for That '70s Show from bestTVshowsyCenre", () => {
    assert.strictEqual(
      findKeyByValue(bestTVShowsByGenre, "That '70s Show"),
      undefined
    );
  });
});

// assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
// assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
