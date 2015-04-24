var assert = require("assert");
var simian = require("./index.js");

describe("letters_to_alg", function() {
  it("turns a sequence into an alg", function() {
    assert.strictEqual(simian.letters_to_alg("I"), "R")
    assert.strictEqual(simian.letters_to_alg("K"), "R'")
    assert.strictEqual(simian.letters_to_alg("IJK"), "R U R'")
    assert.strictEqual(simian.letters_to_alg("ijk"), "R U R'")
  });

  it("ignores letters it doesn't recognize", function() {
    assert.strictEqual(simian.letters_to_alg(","), "")
    assert.strictEqual(simian.letters_to_alg(",I,:''[[[][]JK"), "R U R'")
  });

  it("simplifies sequences", function() {
    assert.strictEqual(simian.letters_to_alg("IJJK"), "R U2 R'")
  });
});

describe("keycode_to_move", function() {
  it("goes from the e.which code to a move", function() {
    assert.strictEqual(simian.keycode_to_move(73), "R");
    assert.strictEqual(simian.keycode_to_move(105), "R");
  });

  it("returns null for missing moves", function() {
    // javascript: the true origin of option types
    assert.strictEqual(simian.keycode_to_move(150), null);
  });
});
