//===============================================================================
//Write a function where given a non-empty array of integers nums, every element appears twice except for one. Find that single one. FOLLOW UP: Could you implement a solution with a O(N) time complexity and without using extra memory?
//===============================================================================

//Constraints
//1 <= nums.length <= 3 * 10 ** 4
//-3 * 10 ** 4 <= nums[i] <= 3 * 10 ** 4
//Each element in the array appears twice except for one element which appears only once

function singleNumber(nums) {
    //object to store key value pairs of array values
    let frequencyCounter = {}

    //tried to use for loop - was getting different results
    //for (i = 0; i < nums.length; i++)
    for (val of nums) {
        if (nums.length === 1) {
            return val
        }
        else if (nums.length > 1) {
            frequencyCounter[val] ? frequencyCounter[val] += 1 : frequencyCounter[val] = 1
        }
    }
    for (key in frequencyCounter) {
        if (frequencyCounter[key] === 1) {
            return key
        }
    }


}

console.log(singleNumber([4,1,2,1,2]))


//Leetcode solutions

//#1
//function singleNumber(nums) {
// 	return nums.reduce((prev, curr) => prev ^ curr);
// }

//===============================================================================

//#2
// function singleNumber (nums) {
//     seen = new Set()
//     return nums.reduce((sum, num) => {
//         if(seen.has(num)) return sum - num
//         else {
//             seen.add(num)
//             return sum + num
//         }
//     }, 0)
// };
