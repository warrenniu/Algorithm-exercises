//===============================================================================
//Given the array of integers nums, you will choose two different indices i and j of that array. Return the maximum value of (nums[i]-1)*(nums[j]-1).
//===============================================================================

//Constraints
// 2 <= nums.length <= 500
// 1 <= nums[i] <= 10^3

//Steps
//1. Sort the array in descending order. Two largest elements are at the front
//2. Instantiate a result variable. Set to 1
//2. For loop that will loop twice to iterate over the first two elements of the array
//3. During each iteration, multiple result with (nums[i] - 1)
//4. Return result at end of function

function maxProduct(nums) {
    let result = 1;
    const length = 1; //product of two max numbers. Zero and 1st index
    const sortedNums = nums.sort(function(a,b) { return b - a}) // O N log N
    console.log(sortedNums)

    for (let i = 0; i <= length; i++) { // O N
        result *= (sortedNums[i] - 1)
        console.log("result", result)
    }
return result
}

console.log(maxProduct([3,4,5,2]))

//leet code O N approach
// var maxProduct = function(nums) {
//     const firstMax = Math.max(...nums)
//     const firstMaxIndex = nums.indexOf(firstMax)
//     nums.splice(firstMaxIndex, 1)
//     const secondMax = Math.max(...nums)
    
//     return (firstMax - 1) * (secondMax - 1)
// };