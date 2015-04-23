var assert = require("assert");
var simian = require("./index.js");

describe("to_alg", function() {
  it("turns a sequence into an alg", function() {
    assert.equal(simian.letters_to_alg("i"), "R")
    assert.equal(simian.letters_to_alg("k"), "R'")
    assert.equal(simian.letters_to_alg("ijk"), "R U R'")
  });
});
