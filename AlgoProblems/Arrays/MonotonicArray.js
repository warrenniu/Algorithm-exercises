//===============================================================================
//Write a function where an array is monotonic, either monotone increasing or monotone decreasing. An array A is monotone increasing if for all i <= j, A[i] <= A[j]. An array A is monotone decreasing if for all i <= j, A[i] >= A[j]. Return true if and only if the given array A is monotonic.
//===============================================================================

//Constraints
//1. 1 <= A.length <= 50000
//2. -100000 <= A[i] <= 100000

//Steps to take
//1. Need to set i to 0. Create a for loop and set j to 1 and increment with each iteration
//2. Set conditional - if j is greater than or equal to i, increment i and loop. If j is less than i, return false
//3. Set conditional - if j is less than or equal to i, increment i and loop. If j is greater than i, return false
//4. return true at end of function

//time complexity: O(N); space complexity: O(1)

// function isMonotonic(A) {
//     let i = 0;
//     let j = 1;

//     if (A[j] > A[i]) {
//         console.log("in first for loop")
//     for (let j = 1; j< A.length; j++) {
//         if (A[j] >= A[i]) {
//             i++
//         }
//             if (A[j] < A[i]) {
//                 return false
//             }
//         }
//     }
    
//     if (A[j] < A[i]) {
//         console.log("in second for loop")
//     for (let j = 1; j < A.length; j++) {
//         if (A[j] <= A[i]) {
//             i++
//         }
//             if (A[j] > A[i]) {
//                 return false
//             }
//     }
// }
//     return true
// }



//Leetcode solution
var isMonotonic = function(A) {
    let increase = true, decrease = true;
    for(let i = 0; i < A.length - 1; i++) {
        if(A[i] > A[i + 1]) increase = false;
        if(A[i] < A[i + 1]) decrease = false;
    }
    return increase || decrease;
};

//A[i] = 6
//A[i + 1] = 7
//increase true; decrease false

//A[i] = 7
//A[i + 1] = 4
//increase false; decrease false

console.log(isMonotonic([2,2,2,1,4,5]))