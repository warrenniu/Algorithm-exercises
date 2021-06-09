//===============================================================================
//Given a positive integer num consisting only of digits 6 and 9.
// Return the maximum number you can get by changing at most one digit (6 becomes 9, and 9 becomes 6).
//===============================================================================

//Constraints
// 1 <= num <= 10^4
// num's digits are 6 or 9.


// Input: num = 9669
// Output: 9969
// Explanation: 
// Changing the first digit results in 6669.
// Changing the second digit results in 9969.
// Changing the third digit results in 9699.
// Changing the fourth digit results in 9666. 
// The maximum number is 9969.


//Steps
//1. Initialize a max variable. Set it equal to num
//2. Convert num to an array. Call it numArray
//3. Initialize a for loop where i = 0. If statement to check if value is 6 or 9. Convert to the other.
//4. Join the number back to a string & parse it to an integer. Call it currentMax
//5. Initialize an if statement. check whether currentMax is greater than max. If it is, set it equal to max
//6. Return max at end of function

function maximum69Number(num) {
    let max = num;
    const numString = num.toString()
    console.log(numString)

    for (let i = 0; i < numString.length; i++) {
        console.log("numString[i]",numString[i])
        if (numString[i] === '6') {
            console.log("here")
            // numString[i] === '6'
            currentMax = numString.replace(numString[i], "9")
        }
        else {
            console.log(" else here")
            currentMax = numString.replace(numString[i],"6")
        }

        const currentMaxInt = parseInt(currentMax)
        console.log(currentMaxInt)

        if (currentMaxInt > max) {
            max = currentMaxInt
            console.log("new max", max)
        };


    };
return max;
}

console.log(maximum69Number(9669))