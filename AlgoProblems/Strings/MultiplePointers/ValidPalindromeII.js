//===============================================================================
//Given a string s, return true if the s can be palindrome after deleting at most one character from it.
//===============================================================================

//Constraints
// 1 <= s.length <= 105
// s consists of lowercase English letters.


//Steps
//1. Convert input string into an array. Set it to a variable called array
//2. Initialize the outer for loop, iterating over array and i set to 0
//3. Initialize a variable called currentArray, which removes the current value of i
//4. Initialize the two pointers. left = 0 & right = currentArray.length - 1
//5. Initialize a while loop where left < right. If equal, increment/decrement left & right. Else, return false
//6. Insert value back into the array at their original index
//7. Return true at end of function

// function validPalindrome(s) {
//     let array = s.split('');
//     console.log(array)

//     for (let i = 0; i < array.length; i++) {
//         // let currentValue = array.splice(i,1);
//         let currentValue = array[i]
//         console.log(currentValue)
//         delete array[i]
//         let currentArray = array.filter(ele => ele !== null )
//         console.log(currentArray)

//         let left = 0;
//         let right = currentArray.length - 1

//         while (left < right) {
//             if (currentArray[left] === currentArray[right]) {
//                 return true
//             } else {
//                 left++
//                 right--

//             }
//         }
//         array = currentArray.splice(i,0,currentValue)
//         console.log(array)
        
//     }

// }

var validPalindrome = function(s) {
    let left = 0;
    let right = s.length - 1;
    
    while (left < right) {
        if (s.charAt(left) != s.charAt(right)) {
            return isValid(left + 1, right) || isValid(left, right - 1);
        }
        left++;
        right--;
    }
    
    return true;
    
    
    function isValid(left, right) {
        while (left < right) {
            if (s.charAt(left) != s.charAt(right)) {
                return false;
            }
            left++;
            right--;
        }
        
        return true;
    }
};

console.log(validPalindrome("ababd"))