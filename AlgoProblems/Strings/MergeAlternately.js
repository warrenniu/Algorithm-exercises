//===============================================================================
//You are given two strings word1 and word2. Merge the strings by adding letters in alternating order, starting with word1. If a string is longer than the other, append the additional letters onto the end of the merged string. Return the merged string.
//===============================================================================

//Constraints
//1. 1 <= word1.length, word2.length <= 100
//2. word1 and word2 consist of lowercase English letters


//Steps
//1. Create an empty string called mergedString
//2. Set two pointers, i and j, at the zeroth index of each string
//3. if statement, checking which string is longer. Create one for if str1 is longer or equal to str2, and the other for if str2 is longer than str1
//4. Set for loop for each condition - adding the value of str1[0] first and then str2[0] to mergedString

function mergeAlternately(word1, word2) {
    let mergedString = "";
    let i = 0;
    let j = 0;

    if (word1.length === word2.length) {
        for (let i = 0; i < word1.length; i++) {
            mergedString = mergedString + word1[i] + word2[j]
            j++
        }

    }
    else if (word1.length > word2.length) {
        
        for (let j = 0; j < word2.length; j++) {
            mergedString = mergedString + word1[i] + word2[j]
            i++
        }
        mergedString = mergedString + word1.slice(word2.length)
    }
    else {
        for (let i = 0; i < word1.length; i++) {
            mergedString = mergedString + word1[i] + word2[j]
            j++
        }
        mergedString = mergedString + word2.slice(word1.length)
    }
    return mergedString
}

console.log(mergeAlternately("abc", "pqrz"))

//leetcode answer
// const mergeAlternately = (a, b) => {
//     const maxLength = Math.max(a.length, b.length)
//     let result = ''
  
//     for (let i = 0; i < maxLength; i++) {
    //using the nullish coalescing operator (??), it will return its right-hand side operand when its left hand side operand is null or undefined.
//       result += (a[i] ?? '') + (b[i] ?? '')
//     }
  
//     return result
//   }