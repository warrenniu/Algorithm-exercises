//===============================================================================
//You are given an integer array nums. The unique elements of an array are the elements that appear exactly once in the array. Return the sum of all the unique elements of nums.
//===============================================================================

//Constraints
//1. 1 <= nums.length <= 100
//2. 1 <= nums[i] <= 100

//Steps
//1. Create an empty object called frequencyCounter to store our elements key & values
//2. Create a sum variable and set it to 0
//3. Iterate over the array and add to the object
//4. Using a for in loop, create a conditional for where the values of the key equals one, add it to the sum variable
//5. Return sum at the end of the function

function sumOfUnique(nums) {
    let frequencyCounter = {};
    let sum = 0;

    for (val of nums) {
        frequencyCounter[val] ? frequencyCounter[val] += 1 : frequencyCounter[val] = 1
    }
    console.log(frequencyCounter)

    for (key in frequencyCounter) {
        if (frequencyCounter[key] === 1) {
            sum = sum + parseInt(key)
        }
    }
    return sum
}

console.log(sumOfUnique([1,2,3,4,5]))

//Leetcode Solution
// var sumOfUnique = function(nums) {
    
//     let arr = []
    
//     for (let i =0; i<nums.length; i++){
//         if (nums.indexOf(nums[i]) == nums.lastIndexOf(nums[i])){
//             arr.push(nums[i])
//         }
//     }    
//     return arr.reduce((a,b) => a+b, 0)
// };