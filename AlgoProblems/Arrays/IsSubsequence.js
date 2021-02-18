//===============================================================================
//Write a function called isSubsequence which takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string. In other words, the function should check whether the characters in the first string appear somewhere in the second string, without their order changing.
//===============================================================================

//Constraints
//1. Time: O(N + M)
//2. Space: O(1)

//Steps
//1. Convert strings into an array 
//2. Create a for loop, iterating over first array and setting i = 0
//3. Create a nested for loop, setting j = 0 and iterating over the second array
//4. if there is a match, i++
//5. if there is no match after second array is finish iterating, return false
//6. return true at end of function

// function isSubsequence(str1, str2) {
//     let arr1 = str1.split('')
//     let arr2 = str2.split('')
    

//     for (let i = 0; i < arr1.length; i++) {
//         for (let j = 0; j < arr2.length; j++) {
//             if (arr1[i] === arr2[j]) {
//                 i++
//             }
//         }
//     }

// }

function isSubsequence(str1, str2) {
    let i = 0;
    let j = 0;

    if (!str1) {
        return true
    }

    while (j < str2.length) {
        if (str2[j] === str1[i]) {
            return true
        }
        j++
    }
    return false
}

console.log(isSubsequence('hello', 'hello world'))