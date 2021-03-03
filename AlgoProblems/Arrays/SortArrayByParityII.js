//===============================================================================
//Given an array of integers nums, half of the integers in nums are odd, and the other half are even. Sort the array so that whenever nums[i] is odd, i is odd, and whenever nums[i] is even, i is even. Return any answer array that satisfies this condition.
//===============================================================================

//Constraints
//1. 2 <= nums.length <= 2 * 10 ** 4
//2. nums.length is even
//3. Half of the integers in nums are even
//4. 0 <= nums[i] <= 1000

//Steps to take
//1. Create three new arrays to store the values - one odd array and one even array, and one for sorted array
//2. Create a for loop with conditional to check to see if it's even. If even, store in even array. Else, store in odd array
//3. Loop over the even array, add the zeroth index of even array and then zeroth index of odd array
//4. return sorted array at end of function

function sortArrayByParityII(nums) {
    let sortedArray = [];
    let oddArray = [];
    let evenArray = [];

    for (i = 0; i < nums.length; i++) {
        if (nums[i] % 2 === 0 ) {
            evenArray.push(nums[i])
        }
        else {
            oddArray.push(nums[i])
        }
    }
    console.log(evenArray)
    console.log(oddArray)

    for (i = 0; i < evenArray.length; i++) {
        sortedArray.push(evenArray[i], oddArray[i])
    }
    console.log(sortedArray)
    return sortedArray
}

//leetcode answer
// var sortArrayByParityII = function(A) {
//     let result = new Array(A.length);
    
//     for(let i = 0, even = 0, odd = 1; i < A.length; i ++) {
//         if(A[i] % 2 === 0) {
//             result[even] = A[i];
//             even += 2;
//         } else {
//             result[odd] = A[i];
//             odd += 2;
//         }
//     }
//     return result;
// };

console.log(sortArrayByParityII([2,3]))