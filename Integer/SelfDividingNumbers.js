//===============================================================================
//
// A self-dividing number is a number that is divisible by every digit it contains.
// For example, 128 is a self-dividing number because 128 % 1 == 0, 128 % 2 == 0, and 128 % 8 == 0.
// A self-dividing number is not allowed to contain the digit zero.
// Given two integers left and right, return a list of all the self-dividing numbers in the range [left, right].
//===============================================================================

//Constraints
// 1 <= left <= right <= 104

// Example 1:

// Input: left = 1, right = 22
// Output: [1,2,3,4,5,6,7,8,9,11,12,15,22]
// Example 2:

// Input: left = 47, right = 85
// Output: [48,55,66,77]


//Steps
//1. Initialize an empty array called array. This will contain every number from left to right
//2. Initialize an empty array called result. This will contain ONLY our self-dividing numbers. Will be returned at end of function
//3. Initialize a for loop, set i to 0 and loop over the length of array

//4. With each iteration, convert integer to an array with each number split. Call variable integerArray
//5. Initialize a inner for loop. Convert each number to an integer. Set if statement -> if integerArray[i] % value === 0, continue. If not, break.
//6. Return result at end of function

function selfDividingNumbers(left, right) {
    // let array = [];
    // let result = [];

    // for (let i = left; i <= right; i++) {
    //     array.push(i.toString())
    // }
    // console.log(array)

    // for (let i = 0; i < array.length; i++) {
    //     // if (i < 10) {
    //     //     result.push(i)
    //     // }
    //     for (let j = 0; j < array[i].length; j++) {
    //         // console.log(array[i].length)
    //         let split = array[i].split('')
    //         console.log(split)
    //         for (let k = 0; k < split.length; k++ ) {
    //             console.log("k",split[k])
    //             if (parseInt(array[i]) % parseInt(split[k]) !== 0 || parseInt(array[i]) % 10 === 0 ) {
    //                 console.log("not divisible")
    //                 break
    //             }
                
    //             if (split.length === 1) {
    //                 result.push(parseInt(array[i]))
    //             }
    //             if (split.length === 2) {
    //                 if (parseInt(array[i]) % parseInt(split[k]) === 0 && parseInt(array[i]) % parseInt(split[k+1]) === 0) {
    //                     result.push(parseInt(array[i]))
    //                 }
    //             }
    //             // if (split.length === 2)
    //             //     if (parseInt(array[i]) % (parseInt(split[k]) && parseInt(split[k+1])) === 0 && parseInt(array[i]) % 10 !== 0) {
    //             // result.push(parseInt(array[i]))
    //             // }
    //             if (split.length === 3)
    //                 if (parseInt(array[i]) % (parseInt(split[k]) && parseInt(split[k+1]) && parseInt(split[k+2])) === 0 && parseInt(array[i]) % 10 !== 0) {
    //             result.push(parseInt(array[i]))
    //             }
    //             if (split.length === 4)
    //                 if (parseInt(array[i]) % (parseInt(split[k]) && parseInt(split[k+1]) && parseInt(split[k+2]) && parseInt(split[k+3])) === 0 && parseInt(array[i]) % 10 !== 0) {
    //             result.push(parseInt(array[i]))
    //             }
    //             if (split.length === 5)
    //                 if (parseInt(array[i]) % (parseInt(split[k]) && parseInt(split[k+1]) && parseInt(split[k+2]) && parseInt(split[k+3]) && parseInt(split[k+4])) === 0 && parseInt(array[i]) % 10 !== 0) {
    //             result.push(parseInt(array[i]))
    //             }
    //             if (split.length === 6)
    //                 if (parseInt(array[i]) % (parseInt(split[k]) && parseInt(split[k+1]) && parseInt(split[k+2]) && parseInt(split[k+3]) && parseInt(split[k+4]) && parseInt(split[k+5])) === 0 && parseInt(array[i]) % 10 !== 0) {
    //             result.push(parseInt(array[i]))
    //             }
                
    //         }
    //     }
    // }
    // let resultUnique = [...new Set(result)]


    // return resultUnique

}

function selfDividingNumbers(left,right) {
    let result = [];

    for (i = left; i <= right; i++) {
        if (i < 10) {
            result.push(i)
            continue
        }
        let temp = i

        while (temp > 0) {
            let module = temp % 10
            if (module === 0 || i % module != 0 ) 
            // console.log("no push")
            break
            console.log(temp)
            temp = Math.floor(temp/10)
            console.log(temp)
        }
        if (temp === 0) {
            result.push(i)
        }
    }

    return result
}

console.log(selfDividingNumbers(1,22)) 