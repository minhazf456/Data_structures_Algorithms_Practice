function mergeArrays(myArray, alicesArray){
    const mergedArray=[];
    let currentIndexALices= 0;
    let CurrentIndexMine =0;
    let currentIndexMerged = 0;

    while(currentIndexMerged <(myArray.length + alicesArray.length)){
        const isMyArrayExhausted = CurrentIndexMyArray >= myArray.length;
        const isAlicesArrayExhausted= currentIndexALices>= alicesArray.length;

        if (!isMyArrayExhausted && (isAlicesArrayExhausted || (myArray[CurrentIndexMine]< alicesArray[currentIndexALices]))){
            mergedArray[currentIndexMerged]= myArray[CurrentIndexMine];
            CurrentIndexMine++;
        }
        else {
            mergedArray[currentIndexMerged] = alicesArray[currentIndexALices];
            currentIndexALices++
        }
        currentIndexMerged++;
    }
        return mergedArray;
    }