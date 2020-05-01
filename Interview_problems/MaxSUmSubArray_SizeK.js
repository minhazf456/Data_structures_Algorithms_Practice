// Given an array, find the average of all contiguous subarrays of size ‘K’ in it.

// Brute force approach

functionmax_subArray(k, arr) {
    let maxSum = 0;
    windowSum = 0;

    for (i = 0; i < arr.length - k +1; i++) {
        windowSum = 0:
        for (j = i; j<i+k; j++){
            windowSum += arr[j];

            maxSum = Math.max(maxSum, windowSum);
        }
        return maxSum;
      }
