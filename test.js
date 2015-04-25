var assert = require("assert");
var simian = require("./index.js");

describe("lettersToAlg", function() {
  it("turns a sequence into an alg", function() {
    assert.strictEqual(simian.lettersToAlg("I"), "R")
    assert.strictEqual(simian.lettersToAlg("K"), "R'")
    assert.strictEqual(simian.lettersToAlg("IJK"), "R U R'")
    assert.strictEqual(simian.lettersToAlg("ijk"), "R U R'")
  });

  it("ignores letters it doesn't recognize", function() {
    assert.strictEqual(simian.lettersToAlg(","), "")
    assert.strictEqual(simian.lettersToAlg(",I,:''[[[][]JK"), "R U R'")
  });

  it("simplifies sequences", function() {
    assert.strictEqual(simian.lettersToAlg("IJJK"), "R U2 R'")
  });
});

describe("keycodeToMove", function() {
  it("goes from the e.which code to a move", function() {
    assert.strictEqual(simian.keycodeToMove(73), "R");
    assert.strictEqual(simian.keycodeToMove(105), "R");
  });

  it("returns null for missing moves", function() {
    // javascript: the true origin of option types
    assert.strictEqual(simian.keycodeToMove(150), null);
  });
});
