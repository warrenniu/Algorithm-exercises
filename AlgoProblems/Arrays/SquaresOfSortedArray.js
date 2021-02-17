//===============================================================================
//Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order
//===============================================================================

//Constraints
//1. 1 <= nums.length <= 10 **4
//2. -10 ** 4 <= nums[i] <= 10 ** 4
//3. nums is sorted in non-decreasing order

//Steps
//1. For loop over array input
//2. With each iteration, square each value
//3. Return sorted array

//APPROACH #1
// function sortedSquares(arr) {
//     let newArray = []
//     let squaredValue = 0
//     for (i = 0; i < arr.length; i++) {
//         // squaredValue = Math.pow(arr[i],2)
//         squaredValue = arr[i] ** 2 
//         newArray.push(squaredValue)
//         // Math.pow(arr[i],2)
        
//     }
//     let sortedArray = newArray.sort(function(a,b) {return a - b})
//     return sortedArray
// }

//APPROACH #2 (Using multiple pointers)
var sortedSquares = function(A) {
    let result = [];
    let l = 0;
    let r = A.length - 1;
    let p = r;

    while (l <= r) {
        if (A[l] ** 2 > A[r] ** 2) {
            result[p--] = A[l++] ** 2;
        } else {
            result[p--] = A[r--] ** 2;
        }
    }
    
    return result;
};


console.log(sortedSquares([-4,-1,0,3,10]))