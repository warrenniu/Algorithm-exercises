//===============================================================================
//Given an integer num, repeatedly add all its digits until the result has only one digit, and return it
//===============================================================================

//Constraints
//1. Question asks us to try and not use a loop in O(1) runtime
//2. 0 <= num <= (2 ** 31) - 1))

//Steps
//1. Create a variable called currentSum = 0
//2. Convert the num to a string and set it to a variable called numString
//3. Set up a while loop. If length of numString > 1
//4. Set up a nested for loop. set currentSum = currentSum + numString[i]



function addDigits(num) {
    let currentSum = 0;
    let numString = num.toString().split('');
    console.log(numString)

    if (numString.length > 1) {
        console.log('inside if statement')

        for (let i = 0; i < numString.length; i++) {
            currentSum = currentSum + parseInt(numString[i])
            console.log(currentSum)
            addDigits(currentSum)
        }
        return currentSum
        
        // numString = currentSum.toString().split('')
        // console.log(numString)
    }
  

    else if (numString.length <= 1) {
        return parseInt(numString)
    }
    // else if (numString.length <= 1) {
    // return currentSum
    // }
}





console.log(addDigits(38))


// function sumDigits(num) {
//     let digits = num.toString().split('');
//     let sum = 0;

//     for (let i = 0; i < digits.length; i++) {
//         sum += Number(digits[i])
//     }
//     return sum
// }

// function addDigits(num) {

//     num = sumDigits(num)

//     if (`${num}`.length === 1) { return num }

//     return addDigits(num)



// }


