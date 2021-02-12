//==================================================================================
//Write a function called maxSubarraySum which accepts an array of integers and a number called n. The function should calculate the maximum sum of n consecutive elements in the array.
//==================================================================================

//Naive Solution
// function maxSubarraySum(arr, num) {
//     if ( num > arr.length) {
//         return null;
//     }
//     let max = -Infinity 
//     for (let i=0; i < arr.length - num + 1; i++) {
//         temp = 0
//         for (let j = 0; j < num; j++) {
//             temp += arr[i + j];
//         }
//         if (temp > max) {
//             max = temp
//         }
//     }
//     return max
// }

//O(n) solution
function maxSubarraySum(arr, num) {
    //maxSum variable sets the maximum value of the consecutive elements
    let maxSum = 0;
    //tempSum stores the current iterated total of the consecutive elements
    let tempSum = 0; 
    //if num is larger than the array length, then its automatically null (edge case)
    if (arr.length < num) {
        return null;
    }
    //setting the first group of array, iterating through and getting the total
    for (let i = 0; i < num; i++) {
        maxSum += arr[i]
    }
    tempSum = maxSum;
    //looping through our array
    for (let i = num; i < arr.length; i++) {
        //our consecutive elements array is being shifted up with each iteration - adding the next element while subtracting the first one in the group
        tempSum = tempSum - arr[i - num] + arr[i];
        //Math.max compares the values and selects the greater one. Set maxSum to that value
        maxSum = Math.max(maxSum, tempSum);
    }
    return maxSum
}

console.log(maxSubarraySum([2,6,9,2,1,8,5,6,3],3))