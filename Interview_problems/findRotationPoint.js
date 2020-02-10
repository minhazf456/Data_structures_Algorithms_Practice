function findRotationPoint(words) {
    const firstWord = words[0];

    let flootIndex = 0;
    let ceilingIndex = words.length - 1;

    while (floorIndex < ceilingIndex) {

        const guessIndex = Math.floor(floorIndex + (ceilingIndex - flootIndex) / 2));

    if (words[guessIndex] >= firstWord) {

        // go right

        floorIndex = guessIndex;
    } else {

        // go left

        ceilingIndex = guessIndex;


    }

    // if floor and ceiling have converged

    if (flootIndex + 1 ===ceilingIndex){

        // Between floor and ceiling is where we flipped to the beginning
      // so ceiling is alphabetically first

        break;
    }
}
 return ceilingIndex;

}