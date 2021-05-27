//===============================================================================
//Given two string arrays word1 and word2, return true if the two arrays represent the same string, and false otherwise.
//A string is represented by an array if the array elements concatenated in order forms the string.
//===============================================================================

//Constraints
// 1 <= word1.length, word2.length <= 103
// 1 <= word1[i].length, word2[i].length <= 103
// 1 <= sum(word1[i].length), sum(word2[i].length) <= 103
// word1[i] and word2[i] consist of lowercase letters.

//Steps
//1. Instantiate a word1String and set it to an empty string
//2. Instantiate a word2String and set it to an empty string
//3. Set up a for loop to iterate over word1. With each iteration, add each string element to word1String
//4. Set up a for loop to iterate over word2. With each iteration, add each string element to word2String
//5. If statement -> if word1 === word2, return true. Else, return false

function arrayStringsAreEqual(word1, word2) {
    let word1String = "";
    let word2String = "";

    for (let i = 0; i < word1.length; i++) {
        word1String += word1[i]
        console.log(word1String)
    }

    for (let i = 0; i < word2.length; i++) {
        word2String += word2[i]
        console.log(word2String)
    }

    if (word1String === word2String) {
        return true
    }
    else {
        return false
    }

}

console.log(arrayStringsAreEqual(["abc", "d", "defg"], ["abcddefg"]))

//leetcode solution
// const arrayStringsAreEqual = (word1, word2) => {
//     const str1 = word1.join('');
//     const str2 = word2.join('');
  
//     // if the strings are not the same length we know they are not equal so return false immediately
//     if(str1.length !== str2.length) 
//       return false;
  
//     // We can loop left to right checking equality. If any two chars !==, we return false
//     for(let i = 0; i < str1.length; i++) {
//       if(str1[i] !== str2[i]){
//         return false;
//       }
//     }
  
//     // We looped successfully, and we can return true
//     return true;
// };

// // Solution 2: More expensive
// // const arrayStringsAreEqual = (word1, word2) => {
// //     const str1 = word1.join('');
// //     const str2 = word2.join('');
  
// //     return str1 === str2;
// // };