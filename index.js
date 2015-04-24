var alg = require("alg");

var letterMappings = {
  "I": "R",
  "K": "R'",
  "J": "U",
  "F": "U'",
  "D": "L",
  "E": "L'",
  "U": "Rw",
  "M": "Rw'",
  "V": "Lw",
  "R": "Lw'",
  "H": "F",
  "G": "F'",
  "S": "D",
  "L": "D'",
  ";": "y",
  "A": "y'",
  "W": "B",
  "O": "B'",
  "Y": "x",
  "T": "x",
  "B": "x'",
  "N": "x'",
  "P": "z",
  "Q": "z'",
  "Z": "Uw",
  "X": "Uw'"
};

var letters_to_alg = function(sequence) {
  var keys = sequence.split("").map(function(key) { return key.toUpperCase() });
  var relevantKeys = keys.filter(function(key) { return letterMappings.hasOwnProperty(key) });
  var moves = relevantKeys.map(function(key) { return letterMappings[key]; });
  return alg.cube.simplify(moves.join(" "));
};

var keycode_to_move = function(keycode) {
  return letterMappings[String.fromCharCode(keycode).toUpperCase()];
};

module.exports = {
  letters_to_alg: letters_to_alg,
  keycode_to_move: keycode_to_move
};
