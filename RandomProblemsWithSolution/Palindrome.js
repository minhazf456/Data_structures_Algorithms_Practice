//Write an efficient function that checks whether any permutation (all permunation of tom is tom, tmo, omt, mto) of an input string is a palindrome.(is a string that is same when read forward and backward)

function hasPalindromePermutation(theString){

    /// track of characters we have seen so far
    const unpairedCharacters = new Set();

    for (let char of theString){
        if (unpairedCharacters.has(char)){
            unpairedCharacters.delete(char);
        } else {
            unpairedCharacters.add(char);
        }
    }
    //  // The string has a palindrome permutation if it
  // has one or zero characters without a pair

    return unpairedCharacters.size<=1;

}

//Complexity - 0(n), cost 0(1)
