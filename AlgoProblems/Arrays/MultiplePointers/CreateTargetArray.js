//===============================================================================
// Given two arrays of integers nums and index. Your task is to create target array under the following rules:
// Initially target array is empty.
// From left to right read nums[i] and index[i], insert at index index[i] the value nums[i] in target array.
// Repeat the previous step until there are no elements to read in nums and index.
// Return the target array.
// It is guaranteed that the insertion operations will be valid.
//===============================================================================

//Constraints
// 1 <= nums.length, index.length <= 100
// nums.length == index.length
// 0 <= nums[i] <= 100
// 0 <= index[i] <= i

//Steps
//1. Instantiate a target array - empty array
//2. Set a left & right pointer, both at 0
//3. Set up a for loop to iterate the length of nums. i = 0
//4. With each iteration, use splice to insert nums[left] at index[right] in target array
//5. Return targetArray at end of function

function createTargetArray(nums, index) {
    let targetArray = [];
    let left = 0;
    let right = 0;

    for (let i = 0; i < nums.length; i++) {
        targetArray.splice(index[right], 0, nums[left])
        left++
        right++
    }
return targetArray

}

//leetcode (not understanding this approach)
// var createTargetArray = function(nums, index) {
//     let length = index.length;
//     let result = new Array(length);
//     console.log(result)
//     let hash = {};
//     for (let i = length - 1; i >= 0; i--) {
//         let myIndex = index[i];
//         console.log(myIndex)
//         for (let prop in hash) {
//             if (prop <= myIndex) {
//                 myIndex += hash[prop];
//                 console.log(myIndex)
//             };
//         };
//         result[myIndex] = nums[i];
//         if (hash[myIndex]) {
//             hash[myIndex] += 1;
//         } else {
//             hash[myIndex] = 1;
//         };
//     };
//     return result;
// };

console.log(createTargetArray([0,1,2,3,4], [0,1,2,2,1]))