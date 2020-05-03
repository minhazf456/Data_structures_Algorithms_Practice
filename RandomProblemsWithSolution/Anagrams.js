// building helper function to build a character map of a given string
function anagrams(stringA, stringB){
    const acharMap = buildCharMap(stringA);
    const bcharMap = buildCharMap(stringB);
    // comparing two of them together.
    // pull out all of the keys from both of this object and compare it
    if (Object.keys(acharMap).length !==Object.keys(bcharMap).length){
      return false;
    }
  
    //Map checking process- chechk number of times the character being used
    // and compare the frquencies on the both object
    // we use 'in' when loop through the object, use 'of' when loop through an array
    // we will just pick one object for loop and keep camparing with other object, we can take either one
  
   for (let char in acharMap){
     if (acharMap[char] !== bcharMap[char]){
       return false
     }
   }
    return true 
  
  }
  function buildCharMap(str) {
    const charMap = {} // creating empty object which will serve as a map where will have a key and values
  
    for (char of str.replace(/[\w]/g, '').toLowerCase()){
      charMap[char] = charMap[char] + 1 || 1;  
    }
    return charMap;
  }
  anagrams('rail safety', 'fairy tales')
  
  
  // function cleanString(str){
  //   return str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
  // }
  // cleanString('Rail safety')