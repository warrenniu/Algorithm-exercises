// Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.
// A subarray is a contiguous part of an array.

// Example 1:
// Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6
// Explanation: [4,-1,2,1] has the largest sum = 6.

// Example 2:
// Input: nums = [1]
// Output: 1

// Example 3:
// Input: nums = [5,4,-1,7,8]
// Output: 23

// Constraints:
// 1 <= nums.length <= 3 * 104
// -105 <= nums[i] <= 105

//Steps
//1. Initialize a variable called maxTotal. This will be carried over each iteration
//2. Initialize a variable called currentTotal. This will be reset to 0 after each iteration
//2. Initialize a for loop to loop over nums input array. Start at index 0
//3. Add up the sum of all the elements and it to maxTotal
//4. If currentTotal is greater than maxTotal, set maxTotal equal to currentTotal.
//5. Return maxTotal at end of function

//Time & Space complexity: O(n)

function maxSubArray(nums) {
  let max = -Infinity;
  let currentMax = 0;

  for (let i = 0; i < nums.length; i++) {
    currentMax = Math.max(nums[i], (currentMax += nums[i]));
    console.log("nums[i]", nums[i], "add nums[i] to currentMax", currentMax);
    max = Math.max(currentMax, max);
    console.log("max", max);
  }
  return max;
}

//-2, -2, -2, -infinity = max = -2
//1, -1, currentMax = 1. 1, -2 max = 1
//-3, -2 currentMax = -2. -2, 1 max = 1

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
