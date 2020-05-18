/// first approach
function Words(nums) {
  rWords(nums, 0, "");
  return [];
}

function rWords(nums, pos, name) {
  var mapping = [
    "0",
    "I",
    "ABC",
    "DEF",
    "GHI",
    "JKL",
    "MNO",
    "PQRS",
    "TUV",
    "WXYZ"
  ];
  // console.log('Looking at number', nums[pos]); console.log("this corresponds
  // to", mapping[nums[pos]]);

  var depth = '';
  for (var i = 0; i < pos; i++) {
    depth += "........."
  }
  if (pos >= nums.length) {
    return;
  }
  var keys = mapping[nums[pos]];
  for (var i = 0; i < keys.length; i++) {
    console.log(depth + name + keys[i]);
    rWords(nums, pos + 1, name + keys[i])
  }
}
Words("9456")

// cleaner Version

function Words(nums) {
  var words = [];
  var mapping = [
    "0",
    "I",
    "ABC",
    "DEF",
    "GHI",
    "JKL",
    "MNO",
    "PQRS",
    "TUV",
    "WXYZ"
  ];
  rWords(nums, 0, "", words, mapping); // passing reference "words and mapping"
  return words;
}

function rWords(nums, pos, name, words, mapping) {

  var depth = '';
  for (var i = 0; i < pos; i++) {
    depth += "........."
  }

  if (pos >= nums.length) {
    words.push(name);
    return;
  }

  var keys = mapping[nums[pos]];
  for (var i = 0; i < keys.length; i++) {
    console.log(depth + name + keys[i]);
    rWords(nums, pos + 1, name + keys[i], words, mapping);
  }
}
Words("9456")
