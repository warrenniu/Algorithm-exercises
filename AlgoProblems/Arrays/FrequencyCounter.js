//===============================================================================
//Write a function called same, which accepts two arrays. The function should return true if every value in the array has it's corresponding value squared in the second array. The frequency of values must be the same.
//===============================================================================

//NAIVE Approach O(N)^2

//Do the arrays match up? If not, automatically returns false and we're done
// function same(arr1, arr2) {
//     if (arr1.length !== arr2.length) {
//         return false
//     }
//     for (let i = 0; i < arr1.length; i++) {
//         // indexOf is a nested loop, creating the quadratic time complexity
//         // Checks to see if there is a squared value in array 2 of a value in array 1
//         let correctIndex = arr2.indexOf(arr1[i] ** 2)
//         // -1 means that it does not exist (indexOf)
//         if (correctIndex === -1) {
//             return false
//         }
//         //If the value exists, we will splice the array and it'll go to the next iteration
//         arr2.splice(correctIndex, 1)
//     }
//     return true
// }

// // O(n) approach

//===============================================================================
//Write a function called same, which accepts two arrays. The function should return true if every value in the array has it's corresponding value squared in the second array. The frequency of values must be the same.
//===============================================================================

// function same(arr1, arr2) {

//     let frequencyArray1 = {}
//     let frequencyArray2 = {}

//     while (arr1.length !== arr2.length) {
//         return false
//     }

//     //Don't understand the syntax
//     for (val of arr1) {
//         frequencyArray1[val] = (frequencyArray1[val] || 0) + 1
//         frequencyArray1[val] ? frequencyArray1[val] +=1 : frequencyArray1[val] = 1
//     }

//     for (val of arr2) {
//         frequencyArray2[val] = (frequencyArray2[val] ||0) + 1 
//     }
//     console.log(frequencyArray1)
//     console.log(frequencyArray2)

//     for (key in frequencyArray1) {
//         if (!(key ** 2 in frequencyArray2)) {
//             return false
//         }
//         //Why is this needed?
//         if (frequencyArray2[key ** 2] !== frequencyArray1[key]) {
//             return false
//         }
//     }
//     return true
// }

//===============================================================================
//Write a function called same, which accepts two arrays. The function should return true if every value in the array has it's corresponding value squared in the second array. The frequency of values must be the same.
//===============================================================================

//Constraints
//Input will always be a positive integer
//Order does not matter

function same(arr1, arr2) {

    //empty objects to store key:value pairs of array values
    let frequencyCounter1 = {}
    let frequencyCounter2 = {}

    //edge case - if array lengths don't match, we return false
    if (arr1.length !== arr2.length) {
        return false
    }

    for (val of arr1) {
        frequencyCounter1[val] ? frequencyCounter1[val] +=1 : frequencyCounter1[val] = 1
    }

    for (val of arr2) {
        frequencyCounter2[val] ? frequencyCounter2[val] +=1 : frequencyCounter2[val] = 1
    }

    // console.log(frequencyCounter1)
    // console.log(frequencyCounter2)

    for (key in frequencyCounter1) {
        if (!(key ** 2 in frequencyCounter2)) {
            return false
        }

        if (frequencyCounter1[key] !== frequencyCounter2[key ** 2]) {
            return false
        }
    }
    return true
}








//Should return true
console.log(same([1,2,3], [9,1,4]))

