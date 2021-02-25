//===============================================================================
//Given an array of integers nums, sort the array in increasing order based on the frequency of the values. If multiple values have the same frequency, sort them in decreasing order. Return the sorted array.
//===============================================================================

//Constraints
//1. 1 <= nums.length <= 100
//2. -100 <= nums[i] <= 100

//Steps
//1. Create an empty object called frequencyCounter to store the frequency of each value
//2. Check the values of each key - sort 

function frequencySort(nums) {
    let frequencyCounter = {};
    
    for (val of nums) {
        frequencyCounter[val] ? frequencyCounter[val] +=1 : frequencyCounter[val] = 1
    }
    console.log(frequencyCounter)
    
    return nums.sort((a,b) => {
        if (frequencyCounter[a] === frequencyCounter[b]) {
            return b - a
        }
        else {
            return frequencyCounter[a] - frequencyCounter[b]
        }
    })
    
}


//leetcode answer (Using Map)

// const map = new Map();
// for (let n of nums) {
//     map.set(n, (map.get(n) + 1) || 1);
// }
// console.log(map)
// var frequencySort = function(nums) {
//     return nums.sort((a, b) => map.get(a) - map.get(b) || b - a)
// };

[3,1,1,2,2,1,2]
console.log(frequencySort([2,3,1,3,2]))