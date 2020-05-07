// Write a function that takes an integer flightLength (in minutes) and an array of integers movieLengths (in minutes) and returns a boolean indicating whether there are two numbers in movieLengths whose sum equals flightLength.

function matchingMovieLength( moviesLengths, flightLength){

    /// movie length we have seen so far

    const movieLengthsSeen = new Set();

    for (let i =0; i <movieslenghts.length; i++){
        const firstMovieLength = moviesLengths[i];
        const secondMovieLength = flightLength - firstMovieLength;
        if (movieLengthsSeen.has(secondMovieLength)){
            return true;
        }
        movieLengthsSeen.add(firstMovieLength);
        // we never found a match

        return false;
    
    }
}

// COmplexity- O(n) time, and O(n) space. Note while optimizing runtime we added a bit of space cost.
