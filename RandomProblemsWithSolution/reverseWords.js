function reverseCharacters(arrayOfChars){
    let leftIndex = 0;
    let rightIndex = arrayOfChars.length -1;

    while (leftIndex<rightIndex){
        // swap the characters
        const temp= arrauOfChars[leftIndex];
        arrayOfChars[leftIndex]= arrayOfChars[rightIndex];
        arrayOfChars[rightIndex]= temp;
        // move towards middle

    leftIndex++;
    rightIndex++;
    }
}