//  You created a game that is more popular than Angry Birds.
// Each round, players receive a score between 0 and 100, which you use to rank them from highest to lowest. So far you're using an algorithm that sorts in  O(nlgn) time, but players are complaining that their rankings aren't updated fast enough. You need a faster sorting algorithm.
// Write a function that takes:
// 1.	an array of unsortedScores
// 2.	the highestPossibleScore in the game
// and returns a sorted array of scores in less than O(nlgn) time.
// // 

public static int [] sortScores(int[] unorderedScores, int highestPossibleScores){
    // array of 0's at indices 0...highestPossibleScores
    int [] scoreCounts = new int[highestPossibleScore +1];
    // populate the score counts
    for ( int score : unorderedScores){
        scoreCounts[score]++;
    }

    // populate the final sorted arrays
    int [] sortedScores = new int[unorderedScores.length];
    int currentSOrtedScoresIndex = 0;
    // for each items in score counts
    for (int score= highestPossibleScore; score >=0; score --){
        int count =scoreCounts[score];
        // for number of times occurs
        for (int occurence =0; occurence < count; occurence++){
            //add it to the sorted arrays
            sortedScores[currentSOrtedScorecIndex] = score;
            currentSOrtedScoresIndex++;
        }
    }
    return sortedScores;
}

// Complexity 0(n) time and space 0(n);