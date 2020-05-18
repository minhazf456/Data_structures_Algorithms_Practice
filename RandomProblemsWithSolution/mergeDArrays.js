// Problem 3(Merge arrays to sorted arrays) Write a function to merge our arrays of orders into one sorted array.

function mergeArrays (myArray, ALiceArray){
    // keep tracking of currentIndex of each arrays

    const mergedArrays= [];
    let currentIndexMine= 0;
    let currentIndexAlice = 0;
    let currentIndexMerged =0;

    while (currentIndexMerged< (myArray.length + ALiceArray.length)){
        const isMyArrayExhausted = currentIndexMine>= myArray.length;
        const isAliceArrayExhasuted = currentIndexAlice>= ALiceArray.length;


        if (!isMyArrayExhausted && (isAliceArrayExhasuted || myArray[currentIndexMine]<ALiceArray[currentIndexAlice])){
            mergedArray[currentIndexMerged] = myArray[currentIndexMine];
            currentIndexMine++;
        }
        else {
            mergedArrays[currentIndexMerged]=ALiceArray[currentIndexAlice];
            currentIndexAlice++;
        }
        currentIndexMerged++;
    }
    return mergeArrays;
}