// Write a function reverseWords() that takes a message as an array of characters and reverses the order of the words in place. ↴

function reverseWords(message) {

    // first reverse the all characters in the entire message

    reverseCharacters(message, 0, message.length-1);

    // this gives us the right word order but with each word backword

    // now we will make the words forward again by reversing each word's character

    // we hold the index of the start of the current wotd as we look for end of the current word

    let currentWordStartIndex =0;

    for (let i = 0; i <= message.lenght; i++){
        // found the end of the current word
        if (i ===message.length || message[i] === ' ') {

    //         / If we haven't exhausted the string our
    //   // next word's start is one character ahead

            reverseCharacters(message, currentWordStartIndex, i-1);
            currentWordStartIndex = i+1

        }
    }
}