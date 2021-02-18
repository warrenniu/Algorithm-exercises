//===============================================================================
//Given an array A of non-negative integers, return an array consisting of all the even elements of A, followed by all the odd elements of A. You may return any answer array that satisfies this condition.
//===============================================================================

//Constraints
//1. 1 <= A.length <= 5000
//2. 0 <= A[i] <= 5000

//Steps
//1. Create an empty array to store values of original array
//2. Iterate through the original array. Set a conditional - if even, unshift the value. Else, push the odd number.
//3. Return the new array

function sortArrayByParity(A) {
    let newArray = [];

    for (i=0; i <= A.length -1; i++) {
        // Why iterate up to A.length - 1? A.length gives a undefined for last element
        if (A[i] % 2 ===0) {
            newArray.unshift(A[i])
        }
        else {
            newArray.push(A[i])
        }
    }
    return newArray
}

console.log(sortArrayByParity([3,2]))


//Leetcode solution 1
// var sortArrayByParity = function(A) {
//     const temp = [];
//     A.forEach(v => {
//         v % 2 === 0 ? temp.unshift(v) : temp.push(v);
//     })
    
//     return temp;
// };

//Leetcode solution 2
// var sortArrayByParity = function(A) {
//     return [...A.filter(v => v % 2 === 0), ...A.filter(v => v % 2 !== 0)];
// };
