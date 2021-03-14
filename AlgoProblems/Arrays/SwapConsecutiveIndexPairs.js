// Given a list of integers nums, swap each consecutive even indexes with each other, and swap each consecutive odd indexes with each other.

// Constraints

// n ≤ 100,000 where n is the length of nums
// Example 1
// Input
// nums = [0, 1, 2, 3, 4, 5, 6, 7, 8]
// Output
// [2, 3, 0, 1, 6, 7, 4, 5, 8]
// Explanation
// 0 and 2 gets swapped
// 1 and 3 gets swapped
// 4 and 6 gets swapped
// 5 and 7 gets swapped
// 8 remains the same

class Solution {
    solve(nums) {
        let j = 2
        for (let i = 0; i < nums.length; i+= 4){
            if (j < nums.length){
                [nums[i], nums[j]] = [nums[j], nums[i]]
            }
                j += 4
        }
        let k = 3
        for (let i = 1; i <= nums.length; i+= 4){
            if (k < nums.length){
                [nums[i], nums[k]] = [nums[k], nums[i]]
            }
                k += 4
        }
        return nums
    }

}
    