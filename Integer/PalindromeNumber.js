//===============================================================================
//Given an integer x, return true if x is palindrome integer.
// An integer is a palindrome when it reads the same backward as forward. For example, 121 is palindrome while 123 is not.
//===============================================================================

//Constraints
// -231 <= x <= 231 - 1


// Example 1:
// Input: x = 121
// Output: true

// Example 2:
// Input: x = -121
// Output: false
// Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.


//Steps
//1. Convert input integer into a string
//2. Set up multiple pointers. Left pointer at zero index & right pointer at last index
//3. Set up a while loop where left < right. Check if values match. If they do, increment/decrement left & right
//4. If they don't, return false
//5. Return true at end of function

function isPalindrome(x) {
    const string = x.toString()

}

console.log(isPalindrome(121))