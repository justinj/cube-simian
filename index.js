var letterMappings = {
  "i": "R",
  "k": "R'",
  "j": "U",
  "f": "U'",
  "d": "L",
  "e": "L'",
  "u": "Rw",
  "m": "Rw'",
  "v": "Lw",
  "r": "Lw'",
  "h": "F",
  "g": "F'",
  "s": "D",
  "l": "D'",
  ";": "y",
  "a": "y'",
  "w": "B",
  "o": "B'",
  "y": "x",
  "t": "x",
  "b": "x'",
  "n": "x'",
  "p": "z",
  "q": "z'",
  "z": "Uw",
  "x": "Uw'"
};

var letters_to_alg = function(sequence) {
  var keys = sequence.split("");
  var relevantKeys = keys.filter(function(key) { return letterMappings.hasOwnProperty(key) });
  var moves = relevantKeys.map(function(key) { return letterMappings[key]; });
  return moves.join(" ");
};

module.exports = {
  letters_to_alg: letters_to_alg
};
