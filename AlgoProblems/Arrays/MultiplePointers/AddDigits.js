//===============================================================================
//Given an integer num, repeatedly add all its digits until the result has only one digit, and return it
//===============================================================================

//Constraints
//1. Question asks us to try and not use a loop in O(1) runtime
//2. 0 <= num <= (2 ** 31) - 1))

//Steps
//1. Convert the num to a string
//2. Create a sum variable to store the current sum
//2. If string.length is equal to one, return it and parse it to Int
//3. Loop over the string. Parse each to Int and add str[i] + add str[i+1] and set that equal to sum
//4. increment i by 2
//5. Return sum

function sumDigits(num) {
    let digits = num.toString().split('');
    let sum = 0;

    for (let i = 0; i < digits.length; i++) {
        sum += Number(digits[i])
    }
    return sum
}

function addDigits(num) {

    num = sumDigits(num)

    if (`${num}`.length === 1) { return num }

    return addDigits(num)



}


console.log(addDigits(383))
