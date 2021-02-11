//======================================
// Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]). Return the running sum of nums.
//======================================

//Constraints
// 1 <= nums.length <= 1000
// -10^6 <= nums[i] <= 10^6

function runningSum(nums) {
    //Create an empty array to push nums into
    let newArray = []
    let currentNum = 0
    //Loop over the nums array, pushing each value into the new array
    for (val of nums) {
        val += currentNum
        currentNum = val
        newArray.push(currentNum)

    }
    //After each iteration, sum the new value with the previous value
    //Return the new array
    return newArray
};

console.log((runningSum([3,1,2,10,1])))