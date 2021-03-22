//===============================================================================
//Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct
//===============================================================================

//Constraints
// 1 <= nums.length <= 105
// -109 <= nums[i] <= 109

//Steps
//1. Create a new empty object called freqCounter1 to store array key value pairs
//2. Create a for loop - initiate the object keys with the values of the array
//3. Create a for in loop - check if values of the key is greater than 1. If yes, return true
//4. Return false at the end of the function

function containsDuplicate(nums) {
    let freqCounter = {};

    for (let i = 0; i < nums.length; i++) {
        freqCounter[nums[i]] ? freqCounter[nums[i]] += 1 : freqCounter[nums[i]] = 1
    }
    console.log(freqCounter)

    for (key in freqCounter) {
        if (freqCounter[key] > 1) {
            return true
        }
    }
    return false
}

console.log(containsDuplicate([1]))