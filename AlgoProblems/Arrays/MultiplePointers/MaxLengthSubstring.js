//===============================================================================
//Given a string s, return the length of the longest substring between two equal characters, excluding the two characters. If there is no such substring, return -1. A substring is a contiguous sequence of characters within a string.
//===============================================================================

//Constraints
// 1 <= s.length <= 300
// s contains only lowercase English letters.

//Steps
//1. Create a empty string to store substring
//2. Set up two pointers. Left = 0; Right = s.length - 1
//3. While loop (left < right)
//4. If s[left] === s[right], use s.replace to remove both characters from the string
//5. Return s.length
//6. Else, left++ & right--
//7. Return -1 at end of function

const maxLengthBetweenEqualCharacters = (s) => {
const n = s.length;
    const start = new Array(26).fill(-1);
    let max = -1;
    
    for (let i = 0; i < n; i++) {
        const index = s.charAt(i).charCodeAt(0) - 97;
        
        if (start[index] === -1) start[index] = i;
        else max = Math.max(max, i - start[index] - 1);        
    }
    
    return max;
};

// var maxLengthBetweenEqualCharacters = function(s) {
//     let left = 0;
//     let right = s.length - 1;
//     var counter = 0;

//     while (left < right) {
//         if (s[left] === s[right]) {
            
//             let replaceLeft = s.replace(s[left],'');
//             let replaceRight = replaceLeft.replace(s[right],'');
//             return replaceRight.length - counter
//         }
//         else {
//             left++
//             right--
//             counter += 2
            
//         }
//     }
//     return -1
// };

console.log(maxLengthBetweenEqualCharacters("ojdncpvyneq"))

//o,q
//j,e
//d,n
//n,y
//c,v
//p