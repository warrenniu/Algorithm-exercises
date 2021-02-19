//===============================================================================
//Given an array of integers and a number, write a function called maxSubarraySum, which finds the maximum sum of a subarray with the length of the number passed to the function. Note that a subarray must consist of consecutive elements from the original array.
//===============================================================================

//Constraints
//1. Time Complexity O(N)
//2. Space Complexity O(1)

//Steps
//1. Create two variables, one for currentSum & one for maxSum
//2. Set edge case - if the array length is less than the num, then return null
//3. Iterate through the first window and get the sum - set maxSum to this value
//4. Create a for loop where i increments by 1, get the total sum of the new window by subtracting the previous number and adding the next number in the array. Compare that currentSum to the maxSum. If currentSum is larger, then set maxSum to currentSum
//5. Return maxSum at the end of the function

function maxSubarraySum(arr, num) {
    let currentSum = 0;
    let maxSum = 0;

    if (arr.length < num) {
        return null
    }

    for (let i = 0; i < num; i++) {
        maxSum = maxSum + arr[i]
    }
    // console.log(maxSum)

    currentSum = maxSum

    for (let i = num; i < arr.length; i++) {
        currentSum = currentSum - arr[i - num] + arr[i]

        // console.log(maxSum)
        // console.log(currentSum)


        if (currentSum > maxSum) {
            maxSum = currentSum
        }
    }
    return maxSum
}

// for (let i = num; i < arr.length; i++) {
//     //our consecutive elements array is being shifted up with each iteration - adding the next element while subtracting the first one in the group
//     tempSum = tempSum - arr[i - num] + arr[i];
//     //Math.max compares the values and selects the greater one. Set maxSum to that value
//     maxSum = Math.max(maxSum, tempSum);


console.log(maxSubarraySum([100, 200, 300, 400], 2))