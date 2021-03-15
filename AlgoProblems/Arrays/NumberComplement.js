//===============================================================================
//Given a positive integer num, output its complement number. The complement strategy is to flip the bits of its binary representation.
//===============================================================================

//Constraints
//1. The given integer num is guaranteed to fit within the range of a 32-bit signed integer.
//2. num >= 1
//3. You could assume no leading zero bit in the integer's binary representation

//Steps
//1. Convert num input into its binary equivalent and into a string
//2. Set up a for loop and iterate over the string. If it's 1, change to 0. If it's 0, change to 1
//3. Change the string back to an integer
//4. Convert the binary integer back to its integer equivalent

function findComplement(num) {
    let binaryNumber = num.toString(2)
    let newBinaryNumber = ""
    console.log(binaryNumber)

    // for (let i = 0; i < binaryNumber.length; i++) {
    //     if (binaryNumber[i] === "1") {
    //         binaryNumber[i] = "0"
    //         newBinaryNumber += binaryNumber[i]
    //         console.log(binaryNumber[i])
    //         console.log(newBinaryNumber)
    //     }
    //     else {
    //         binaryNumber[i] = "1"
    //         newBinaryNumber += binaryNumber[i]
    //         console.log(binaryNumber[i])
    //     }
    // }
    for (val of binaryNumber) {
        newBinaryNumber += val === "1" ? "0" : "1"
    }
    console.log(newBinaryNumber)
    // console.log(binaryNumber)
    return parseInt(newBinaryNumber,2)

}

console.log(findComplement(5))