//===============================================================================
//Given integer array nums, return the third maximum number in this array. If the third maximum does not exist, return the maximum number.
//===============================================================================

//Constraints
// 1 <= nums.length <= 104
// -231 <= nums[i] <= 231 - 1

//Steps
//1. Create a Map to remove duplicate values in nums
//2. Sort the array in ascending order
//3. If nums[2] !== undefined, return the value. Else, return the max value in the array

function thirdMax(nums) {
    let numsSet = new Set(nums)
    let newArr = Array.from(numsSet)
    let sortArr = newArr.sort(function(a,b) { return b - a})
    console.log(sortArr)

    if (sortArr[2] !== undefined) {
        return sortArr[2]
    }
    else {
        return sortArr[0] 
    }
}

console.log(thirdMax([1,2]))

//Leetcode solution O(N)

// var thirdMax = function(nums) {
//     let first = -Infinity;
//     let second = -Infinity;
//     let third = -Infinity;
//     for (let i = 0; i < nums.length; i++) {
//       if (nums[i] === first || nums[i] === second || nums[i] === third) continue;
//       if (nums[i] > first) {
//         [first, second, third] = [nums[i], first, second];
//       } else if (nums[i] > second) {
//         [second, third] = [nums[i], second];
//       } else if (nums[i] > third) {
//         third = nums[i];
//       }
//     }
//     return third === -Infinity ? first : third;
//   };