//===============================================================================
//Given a string s. You should re-order the string using the following algorithm:
// Pick the smallest character from s and append it to the result.
// Pick the smallest character from s which is greater than the last appended character to the result and append it.
// Repeat step 2 until you cannot pick more characters.
// Pick the largest character from s and append it to the result.
// Pick the largest character from s which is smaller than the last appended character to the result and append it.
// Repeat step 5 until you cannot pick more characters.
// Repeat the steps from 1 to 6 until you pick all characters from s.
// In each step, If the smallest or the largest character appears more than once you can choose any occurrence and append it to the result.
// Return the result string after sorting s with this algorithm.
//===============================================================================

//Constraints
// 1 <= s.length <= 500
// s contains only lower-case English letters.


//Steps
//1. Initialize a variable called array -> which is s in array form
//2. Intialize a variabled called return. Set it to an empty string
//3. Sort array in ascending order


// aabbccdd
// sort input asc
// iterate
// ignore repeating chars
// iterate until larger character
// remove chars from arr
// reverse iteration

// '' -> 'aaabbbcccddd'x
// 'a' -> 'aabbcccddd'x
// 'ab' -> 'aabbcccddd'x
// 'abc' -> 'aabbccddd'x
// 'abcd' -> 'aabbccdd'x
// 'abcdd' -> 'aabbccd'
// 'abcddc' -> 'aabbcd'
// 'abcddcb' -> 'aabcd'
// 'abcddcba' -> 'abcd'
// ...
// 'abcddcbaabcd' -> ''
const sortString = function(s) {
    //base case. If nothing is string, return empty string
    if (s === '') return '';
    
    const arr = s.split('');
    //initial sort in asc order
    arr.sort();
    
    //set initial value for our result string. remove value from array
    let result = arr.shift();

    let i = 0;
    //control flow for asc and des array sort
    let direction = 1;
    
    while (arr.length) {
        //last element. No need to sort -> add last element to result string and return it
        if (arr.length === 1) {
            return result += arr[i]
        }
       
        //checking for repeats. If the last inserted value in result is same as current array iteration value, move i up
        if (arr[i] === result[result.length - 1]) {
           i += direction;
        } else {
            //If different, add current value to result & remove from array
            result += arr[i];
            arr.splice(i, 1);
            }
        //check if i is at last index
        if (i === (arr.length - 1 || undefined)) {
            result += arr[i];
                arr.splice(i, 1);
            //control our sort. After one full iteration, reverse the arr
            direction *= -1
            if (direction === 1) {
                arr.sort(function(a,b) {return a-b})
                console.log("array sorted ascending", arr)
            } else {
                arr.sort(function(a,b) {return b-a})
                console.log("array sorted descending", arr)
            }
            //reset our iteration to iterate over the newly sorted arr
            i = 0
        }
    }
}
        
        
        // console.log({arr, i, result});
        // if (i === arr.length - 1) {
        //     if (result[result.length - 1] === arr[i] && justFlipped) {
        //         result += arr[i];
        //         arr.splice(i, 1);
        //         justFlipped = false;
        //     }
        //     result += arr[i];
        //     arr.splice(i, 1);
        //     direction *= -1;
        //     i += direction;
        //     continue;
        // }
        // if (arr[i] === result[result.length - 1]) {
        //     i += direction;
        // } else {
        //     result += arr[i];
        //     arr.splice(i, 1);
        //     if (direction === -1) {
        //         i += direction;
        //     }
        // }
        // count++;
    


console.log(sortString("aaaabbbbcccc"))

// '' -> 'cdeeelot'x
// 'c' -> 'deeelot'x
// 'cd' -> 'eeelot'x
// 'cde' -> 'eelot'x
// 'cdel' -> 'eeot'x
// 'cdelo' -> 'eet'x
// 'cdelot' -> 'ee'


// 'abcddcb' -> 'aabcd'
// 'abcddcba' -> 'abcd'
// ...
// 'abcddcbaabcd' -> ''







// function sortString(s) {
//     const n = s.length;
//     console.log(n)
//     const count = new Array(26).fill(0);

//     console.log(count)

//     for (const char of s) {
//         const index = char.charCodeAt(0) - 97;
//         console.log(index)
//         count[index]++

//     }
//     let result = "";

//     while (result.length < n) {
//         for (let j = 0; j < 26 && result.length < n; j++) {
//             if (count[j] > 0) {
//                 const char = String.fromCharCode(j + 97);
//                 result += char;
//                 count[j]--;
//             }
//         }
        
//         if (result.length === n) return result;
        
//         for (let k = 25; k >= 0 && result.length < n; k--) {
//             if (count[k] > 0) {
                
//                 const char = String.fromCharCode(k + 97);
//                 result += char;
//                 count[k]--;
//             }
//         }
        
//         if (result.length === n) return result;
//     }
// };


