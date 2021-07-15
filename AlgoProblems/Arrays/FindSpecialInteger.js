//===============================================================================
//Given an integer array sorted in non-decreasing order, there is exactly one integer in the array that occurs more than 25% of the time. Return that integer
//===============================================================================

//Constraints
//1. 1<= arr.length <= 10 ** 4
//2. 0<= arr[i] <= 10 ** 5

//Steps
//1. Create an empty object called Frequency Counter to store key value pairs of each integer element and the number of times it appears
//2. Get the array length / 4 and set that equal to a variable called QuarterValue
//3. Compare each key value to the QuarterValue
//4. Return the key that is greater than QuarterValue

// function findSpecialInteger(arr) {
//     let frequencyCounter = {}
//     let quarterValue = arr.length * .25
    
//     for (val of arr) {
//         frequencyCounter[val] ? frequencyCounter[val] += 1 : frequencyCounter[val] = 1
//     }

//     for (key in frequencyCounter) {
//         if (frequencyCounter[key] > quarterValue) {
//             return key
//         }
//     }
// }

//Leetcode solution (using Sliding Window)
var findSpecialInteger = function(arr) {
    const ws = Math.floor(arr.length / 4);
    console.log(ws)
    for (let i = 0; i < arr.length - ws; i++) {
        //if the value appears more than ws, we can conclude it appears more tha 25% of the time
        if (arr[i] === arr[i + ws]) {
            return arr[i];
        }
    }
    return -1;
};

console.log(findSpecialInteger([1,2,2,6,6,6,6,7,10]))