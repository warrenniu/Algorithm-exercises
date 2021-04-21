//===============================================================================
//Write an algorithm to determine if a number n is happy.
// A happy number is a number defined by the following process:

// Starting with any positive integer, replace the number by the sum of the squares of its digits.
// Repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1.
// Those numbers for which this process ends in 1 are happy.
// Return true if n is a happy number, and false if not.
//===============================================================================

//Constraints
// 1 <= n <= 2 ^ 31 - 1

//Steps to take
//1. EDGE case -> if n.length is 1 -> if value is 1, return true. else, return false
//2. Create a result variable, instantiate it to 0
//3. Set up a while loop where n.length > 1. Set up inner for loop where we square i with each iteration & add it to result. Set n = result

function isHappy(n) {
    let result = 0;
    let numberToString = n.toString()
    console.log(numberToString.length)

    while (numberToString.length > 1) {
        for (let i = 0; i < numberToString.length; i++) {
            result += parseInt(numberToString[i]) ** 2
            console.log("result",result)
        }
        numberToString = result.toString()
        result = 0
    }
    
    if (numberToString.length === 1) {
        if (parseInt(numberToString) === 1 || parseInt(numberToString) === 7) {
            return true
        }
        else {
            return false
        }
    }

    //6 -> 36
    // 45
    // 41
    //
    //





    // let currentNumber = n;
    // let addedNumber = 0;

    // while (currentNumber !== 1) {
    //     let tempArray = currentNumber.toString().split('')
    //     for (let i = 0; i < tempArray.length; i++) {
    //         addedNumber += (tempArray[i] * tempArray[i])
    //     }
    //     currentNumber = addedNumber 
    //     addedNumber = 0
    // }

    // if (currentNumber === 1) {
    //     return true
    // }
    // else {
    //     return false
    // }

}

console.log(isHappy(7))