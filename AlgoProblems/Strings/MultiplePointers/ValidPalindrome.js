//===============================================================================
//Given a string s, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.
//===============================================================================

//Constraints
// 1 <= s.length <= 2 * 105
// s consists only of printable ASCII characters.


//Steps
//1. Convert the input string into an array. Set it to a variable called array
//2. Filter the array - have it only contain lower and upper case alphanumeric characters (use ASCII table)
//3. Join the array back into a string and use toLowercase() method on it. Set variable to newString
//4. Initialize two pointers. Left = 0; Right = newString.length - 1
//5. Initialize a while loop where left < right. If equal, increment/decrement left & right. Else, return false
//6. Return true at end of function

function isPalindrome(s) {
    let array = s.split('');
    console.log(array)
    const result = array.filter(char => (char.charCodeAt() >= 65 && char.charCodeAt() <= 90) || (char.charCodeAt() >= 97 && char.charCodeAt() <= 122) || (char.charCodeAt() >= 48 && char.charCodeAt() <= 57));
    console.log(result)
    let newString = result.join('').toLowerCase();
    console.log(newString)

    let left = 0;
    let right = newString.length - 1;

    while (left < right) {
        if (newString[left] === newString[right]) {
            left++
            right--
        } else {
            return false
        }
    }
return true
}



console.log(isPalindrome("0P")) //should return true
//leetcode
// var isPalindrome = function(s) {
    
   
//     s = s.replace(/[^0-9a-zA-Z]+/gmi,"");
//     s = s.toLowerCase();

//     var l = 0, r = s.length - 1;
//     console.log(s);

//     while(l<r) {
//         if(s.charAt(l) != s.charAt(r)) {
//             return false;
//         }
//         l++;
//         r--;
//     }
//     return true;
// };