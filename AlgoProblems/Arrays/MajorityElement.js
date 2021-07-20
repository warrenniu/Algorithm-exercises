//===============================================================================
// Given an array nums of size n, return the majority element.
// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.
//===============================================================================

//Constraints
// n == nums.length
// 1 <= n <= 5 * 104
// -231 <= nums[i] <= 231 - 1

//Steps
//1. Create a empty hash -> call it freqCounter
//2. Iterate over array -> populate hash with element freq counter
//3. Iterate over freqCounter -> If value / nums.length > 0.5, return key

function majorityElement(nums) {
    const freqCounter = {};
    const numsLength = nums.length;

    for (let i = 0; i < numsLength; i++) {
        freqCounter[nums[i]] = freqCounter[nums[i]] ? freqCounter[nums[i]] += 1 : freqCounter[nums[i]] = 1
    };

    for (key in freqCounter) {
        if (freqCounter[key] / numsLength > 0.5) {
            return key
        }
    }

}

console.log(majorityElement([2,2,1,1,1,2,2]))