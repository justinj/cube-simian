simian
======

A library for making use of the common mappings for Rubik's Cube simulators.

Notable examples of these mappings are [hi-games](http://hi-games.net/cube/),
[jflysim](http://jfly.cubing.net/jflysim/qqTimer.html), and
[qcube](http://mzrg.com/js/qcube-v2.html).

# API

## `simian.letters_to_alg(<string>)`

Example:
```javascript
simian.letters_to_alg("ijkf") // => "R U R' U'"
```

## `simian.keycode_to_move(<int>)`

Example:
```javascript
simian.letters_to_alg(73) // => "R"
```

for when you have an event handler.
