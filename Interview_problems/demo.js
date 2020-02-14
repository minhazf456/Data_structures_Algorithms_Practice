
 string= ["c", "a", "t"];
 function getPermutations(string) {

  // Base case
  if (string.length <= 1) {
    return new Set([string]);
  }

  const allCharsExceptLast = string.slice(0, -1);
  console.log(allCharsExceptLast);
  const lastChar = string[string.length - 1];
// console.log("***********slicing of all characters above***************");

  // Recursive call: get all possible permutations for all chars except last
  const permutationsOfAllCharsExceptLast = getPermutations(allCharsExceptLast);
  console.log("resurviecall call each time is  ", permutationsOfAllCharsExceptLast);

  // // Put the last char in all possible positions for each of the above permutations
  const permutations = new Set();
  permutationsOfAllCharsExceptLast.forEach(permutationOfAllCharsExceptLast => {
    for (let position = 0; position <= allCharsExceptLast.length; position++) {
      const permutation = permutationOfAllCharsExceptLast.slice(0, position) + lastChar + permutationOfAllCharsExceptLast.slice(position);
      console.log("first value of permutation", permutationOfAllCharsExceptLast.slice(0, position) + " 2nd value of permutation " , lastChar + " lastValue is ", permutationOfAllCharsExceptLast.slice(position));
      console.log( "total value is ",  permutation);
     
      permutations.add(permutation);
      //  console.log("**********", permutation);
    }
  });

  return permutations;
}

getPermutations(string)
