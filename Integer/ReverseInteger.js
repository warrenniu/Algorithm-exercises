//===============================================================================
// Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.
// Assume the environment does not allow you to store 64-bit integers (signed or unsigned).
//===============================================================================

//Constraints
// -231 <= x <= 231 - 1

// Example 1:

// Input: x = 123
// Output: 321
// Example 2:

// Input: x = -123
// Output: -321
// Example 3:

// Input: x = 120
// Output: 21
// Example 4:

// Input: x = 0
// Output: 0

function reverseInteger(x) {
    //convert input integer to array so we can manipulate
    const numToArray = x.toString().split('')
    console.log(numToArray)
    
    //check if zero index is negative. Need to keep negative symbol in front & reverse all other elements
    if (numToArray[0] === '-') {
        let left = 1;
        let right = numToArray.length - 1;
        
        while (left < right) {
            let temp = numToArray[right];
            numToArray[right] = numToArray[left]
            numToArray[left] = temp
            left++
            right--
        }
    } else {
        numToArray.reverse().join('')
    }
    console.log(numToArray)
    const reversedNum = parseInt(numToArray.join(''))

    console.log(reversedNum)

    //if reversed integer is outside of 32 bit signed 32 bit integer range, return 0
    if (reversedNum <= -2147483648 || reversedNum >= 2147483647) {
        return 0
    } else {
        return reversedNum
    }




}

console.log(reverseInteger(1534236469))