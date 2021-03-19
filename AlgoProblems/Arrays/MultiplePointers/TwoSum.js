//===============================================================================
//Given an array of integers numbers that is already sorted in ascending order, find two numbers such that they add up to a specific target number. Return the indices of the two numbers (1-indexed) as an integer array answer of size 2, where 1 <= answer[0] < answer[1] <= numbers.length. You may assume that each input would have exactly one solution and you may not use the same element twice.
//===============================================================================

//Constraints
// 2 <= numbers.length <= 3 * 104
// -1000 <= numbers[i] <= 1000
// numbers is sorted in increasing order.
// -1000 <= target <= 1000
// Only one valid answer exists.

//Steps
//1. Set up multiple pointers, one at the start and end of the array
//2. SEt up a while loop, have the pointers move up or down based on whether sum is greater or less than target
//3. If sum is equal to target, return the two indices

function twoSum(arr, target) {
    let left = 0
    let right = arr.length - 1;

    while (left < right) {
        if (arr[left] + arr[right] > target) {
            right--
        }
        else if (arr[left] + arr[right] < target) {
            left++
        }
        else {
            return [left + 1,right + 1]
        }
    }
}

console.log(twoSum([-1,0],-1))