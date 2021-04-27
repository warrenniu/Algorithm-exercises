//===============================================================================
//Given two integers L and R, find the count of numbers in the range [L, R] (inclusive) having a prime number of set bits in their binary representation.
// (Recall that the number of set bits an integer has is the number of 1s present when written in binary. For example, 21 written in binary is 10101 which has 3 set bits. Also, 1 is not a prime.)
//===============================================================================

//Constraints
// L, R will be integers L <= R in the range [1, 10^6].
// R - L will be at most 10000.

//Steps
//1. set a variable called total = R - L
//1. set a variable called result = 0
//2. Set up a for loop, set i = L, i < total + 1, i++
//3. With each iteration, convert the number to its binary equivalent
//4. Do a frequency Counter - store the 1's and 0's in a hash map
//5. if the value is a prime number, increase result by 1
//6. return result at end of function

// function countPrimeSetBits(L,R) {
//     let result = 0;
//     let flag = true
    
//     for (let i = L; i <= R; i++ ) {
//         let binary = i.toString(2)
//         console.log(binary)
//         binaryString = binary.toString()
//         console.log(binaryString)
//         let freqCounter = {};
//         for (val of binaryString) {
//             freqCounter[val] = freqCounter[val] ? freqCounter[val] += 1 : freqCounter[val] = 1
//         }
//         console.log(freqCounter)

//         if (freqCounter[1] < 2) {
//             flag = false
//             console.log(flag)
//         }
//         // for (let i = 2; i <= Math.sqrt(freqCounter[1]); i++) {
//          for (let i = 2; i <= freqCounter[1] - 1; i++) {
//             if (freqCounter[1] % i == 0) {
//                 flag = false
//                 console.log(flag)
//                 break
//             }
//         }
//         if (flag) {
//          result += 1

//          console.log(result)
//         }
            

//     }
//     return result
// }

function countPrimeSetBits(L,R) {
    let counter = 0;

    for (let i = L; i <= R; i++) {
        let bits = i.toString(2).split('').filter(x => x !== '0')
        console.log(bits)

        if (isPrime(bits.length)) counter ++ 
    }
    return counter

}

const isPrime = num => {
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i ===0) return false 
    }
    return num > 1
}

console.log(countPrimeSetBits(6,10))