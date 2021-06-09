//===============================================================================
//Given an array nums of integers, return how many of them contain an even number of digits.
//===============================================================================

//Constraints
// 1 <= nums.length <= 500
// 1 <= nums[i] <= 10^5


// Input: nums = [12,345,2,6,7896]
// Output: 2
// Explanation: 
// 12 contains 2 digits (even number of digits). 
// 345 contains 3 digits (odd number of digits). 
// 2 contains 1 digit (odd number of digits). 
// 6 contains 1 digit (odd number of digits). 
// 7896 contains 4 digits (even number of digits). 
// Therefore only 12 and 7896 contain an even number of digits.


//Steps
//1. Loop through the array of nums, convert each integer to a string. Set the array to stringNums
//2. Loop through the array of stringNums -> get the length of each string element. Set that to lengthArray.
//3. Instantiate a variable called result. Set it to 0
//4. Loop through lengthArray. Check if number is even. If yes, increment result += 1
//5. Return result at end of function

function findNumbers(nums) {
    let result = 0;
    let stringNums = [];
    let lengthArray = [];

    for (let i = 0; i < nums.length; i++) { //O N
        stringNums.push(nums[i].toString())
    };

    for (let i = 0; i < stringNums.length; i++) { //O N
        lengthArray.push(stringNums[i].length)
    };

    console.log(stringNums)
    console.log(lengthArray)

    for (let i = 0; i < lengthArray.length; i++) { //O N
        if (lengthArray[i] % 2 === 0) {
            result += 1;
        }
    };

    return result;

}

//leetcode solution
// let findNumbers = function(nums) {
//     let count=0;
    
//     for(let i=0;i<nums.length;i++){
//         let s='';
//         s=s+nums[i];
//         console.log(s)
//         if(s.length%2===0){
//             count++;
//         }
//     }
//     return count;
// };

console.log(findNumbers([12,345,2,6,7896]))
