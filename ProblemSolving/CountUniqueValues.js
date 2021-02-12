//===============================================================================
//Implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values in the array. There can be negative numbers in the array, but it will always be sorted
//===============================================================================
//countUniqueValues([1,1,1,1,2]) //2
//countUniqueValues([]) //0
//countUniqueValues([1,2,3,4,4,7,7,12,12,13]) //7

function countUniqueValues(arr) {
    // Create two pointers, one being at the zeroth index and the second at the first index
    let i = 0
    let j = 1
    
    while (arr === undefined || arr.length === 0) {
        return 0
    }
    while (j === arr.length) {
        return 1
    }
    console.log(arr)


    while (j < arr.length) {
        if (arr[i] === arr[j]) {
            j++
        }
        else if (arr[i] !== arr[j]) {
            i++
            arr[i] = arr[j]
        }
    }
    let uniqueArray = [... new Set(arr)]
    console.log(uniqueArray)
    return uniqueArray.length
}



// Colt Steele method
// function countUniqueValues(arr) {
//     if (arr.length === 0) {
//         return 0
//     }
//     let i = 0
//     for (let j = 1; j < arr.length; j++) {
//         if (arr[i] !== arr[j]) {
//             i++;
//             arr[i] = arr[j]
//         }
//     }
//     return i + 1
// }

console.log(countUniqueValues([]))