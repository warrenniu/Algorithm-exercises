//===============================================================================
//Given a positive integer, check whether it has alternating bits: namely, if two adjacent bits will always have different values.
//===============================================================================

//Constraints
// 1 <= n <= 231 - 1

//Steps
//1. Convert the integer to its binary equivalent
//2. Loop over the binary string -> If the value of i & i+1 is the same, return false
//3. Return true at end of function

function hasAlternatingBits(n) {
    let binary = n.toString(2)
    console.log(binary)

    if (binary.length < 2) {
        return true
    }
    for (let i = 0; i < binary.length; i++) {
        if (binary[i] === binary[i+1]) {
            return false
        }
    }
return true
}

console.log(hasAlternatingBits(1))