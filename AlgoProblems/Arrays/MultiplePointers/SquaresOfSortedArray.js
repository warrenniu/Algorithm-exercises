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

//===============================================================================
//Given an integer array A sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order
//===============================================================================

//APPROACH #2 (Using multiple pointers)
function sortedSquares(A) {
    let left = 0;
    let right = A.length - 1
    let result = []

    for (let i = A.length - 1; i >=0; i--) {
        if (Math.abs(A[left]) > A[right]) {
            A[left] = A[left] ** 2
            result.unshift(A[left])
            left++
            // console.log(result)
        }
        else {
            A[right] = A[right] ** 2
            result.unshift(A[right])
            right--
        }
        // console.log(result)
    }
    return result 
}

console.log(sortedSquares([-4,-1,1,3,10]))