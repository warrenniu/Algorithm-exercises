//===============================================================================
//Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.
//===============================================================================

//Constraints
// n == nums.length
// 1 <= n <= 104
// 0 <= nums[i] <= n
// All the numbers of nums are unique.

//Steps to take
//1. set n = nums.length
//2. Set up a for loop that iterates n times
//3. If nums.includes does not include i, return i

function missingNumber(nums) {
    let n = nums.length
    console.log(n)

    for (let i = 0; i < n + 1; i++) {
        if (!(nums.includes(i))) {
            return i
        }
    }

}

console.log(missingNumber([0]))