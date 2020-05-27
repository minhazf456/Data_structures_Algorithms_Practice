function sortScores(unorderedScores, highestPossibleScores){
    const scoreCounts = new Array(highestPossibleScore + 1).fill(0);
    // populate scoreCounts

    unorderedScores.forEach(score =>){
        scoreCounts[score]++;
    }
    // populate the final sorted arrays

    const sortedScores = [];
    // each item in scoreCounts

    for (let score= highestPossibleScores; score>=0; score--){
        const count = scoreCounts[score];
        // for the number of times the items occured
        for (let time =0; time<count; time ++){
            sortedScores.push(score);
        }
    }

    return sortedScores;


}const scoreCounts = new Array(highestPossibleScore + 1).fill(0);