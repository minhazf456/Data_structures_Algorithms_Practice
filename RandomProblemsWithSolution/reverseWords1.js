// Problems 2: (Reverse the words) Write a function reverseWords() that takes a message as an array of characters and reverses the order of the words in place. ↴

function reverseWords(message){
    // first we will reverse all the characters in the entire message
    reverseCharacters(message, 0, message.length -1);
    // reversed all characters but with each word with backword


    let currentWordStartIndex = 0;
    for (let i = 0; i <=message.length; i ++){
        if ( i ===message.length || i === ''){
            reverseCharacters(message, currentWordStartIndex, i-1);
            currentWordStartIndex = i +1;
        }
    }
}

  // helper function

  function reverseCharacters(message, leftIndex, rightIndex){
      while (leftIndex <righIndex){
          // swap the leftchar and right char
          const temp = message[leftIndex];
          message[leftIndex] = message[rightIndex];
          message[rightIndex] = temp;
          leftIndex++;
          rightIndex--;
      }
  }