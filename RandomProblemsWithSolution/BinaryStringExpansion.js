function BinaryStringExpansion(str) {
  var words = [];
  _rBinaryStringExpansion("", str, words);
  return words;
  /// resursive codes
}
function _rBinaryStringExpansion(name, rem, words) {

  var depth = '';
  for (var i = 0; i < name.length; i++) {
    depth += ".........."
  }

  if (rem == "") {
    words.push(name);
    // console.log(name);
    return;
  }

  var new_rem = "";
  for (var i = 1; i < rem.length; i++) {
    new_rem += rem[i];
  }

  if (rem[0] === "?") {
    console.log(depth + name + "1");
    _rBinaryStringExpansion(name + "1", new_rem, words);
    console.log(depth + name + "0");
    _rBinaryStringExpansion(name + "0", new_rem, words);
  } else {
    console.log(depth + name + rem[0]);
    _rBinaryStringExpansion(name + rem[0], new_rem, words);
  }
}

BinaryStringExpansion("?0?")