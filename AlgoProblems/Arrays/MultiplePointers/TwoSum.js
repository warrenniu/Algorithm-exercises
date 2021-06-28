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

// function twoSum(arr, target) {
//     let left = 0
//     let right = arr.length - 1;

//     while (left < right) {
//         if (arr[left] + arr[right] > target) {
//             right--
//         }
//         else if (arr[left] + arr[right] < target) {
//             left++
//         }
//         else {
//             return [left + 1,right + 1]
//         }
//     }
// }

// console.log(twoSum([-1,0],-1))


//leetcode O(N)
function twoSum(nums, target) {
        const map = {};
      
        for (let i = 0; i < nums.length; i++) {
          const difference = target - nums[i];
          console.log(difference)
      
          //Lookup in our map. if the difference exists in the map, we can end our loop and return our indices in the array
          if (difference in map) {
              console.log(map)
            return [map[difference], i];
          }
      
          //populates our object with each iteration. Setting our value as the key and their index as the value
          map[nums[i]] = i;
          console.log(map)
          
        }

        //O(N2)
    // for (let i = 0; i < nums.length; i++) {
    //     for (let j = 1; j < nums.length; j++) {
    //         if (nums[i] + nums[j] === target && i !== j) {
    //             return [i,j]
    //         }
    //     }
    // }

}

console.log(twoSum([2,5,5,11], 10))