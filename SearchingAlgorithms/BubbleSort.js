//===============================================================================
//Write a function that finds a substring within a longer string
//===============================================================================

// SAMPLE INPUT/OUTPUT

// naiveString('zomgzomg'. 'omg') //2

//Steps
//1. Loop over the longer string
//2. Loop over the shorter string
//3. If the characters don't match, break out of the inner loop
//4. If the characters do match, keep going
//5. If you complete the inner loop and find a match, increment the count of matches
//6. Return the count

// function naiveString(str1, str2) {
//     let count = 0;
//     let i = 0;

//     while (i < str1.length) {
//         console.log(i)
//         for (let j = 0; j < str2.length; j++) {
//             console.log(j)
//             if (str2[j] === str1[i] && j === str2.length - 1) {
//                 count++
//                 i++
//                 console.log(count)
//             }
//             else if (str2[j] === str1[i]) {
//                 continue
//             }
//             else if (str2[j] !== str1[i] ) {
//                 i++
//             }
//         }
//     }
//     return count
// }

// function naiveString(long,short) {
//     let count = 0;

//     for (let i = 0; i < long.length; i++) {
//         for (let j = 0; j < short.length; j++) {
//             console.log(short[j],long[i+j])
//             if (short[j] !== long[i+j]) {
//                 console.log("break!")
//                 break
//             }
//             if (j === short.length - 1) {
//                 console.log("Found One")
//                 count++
//             }

//         }
//     }
//     return count
// }

// console.log(naiveString('zomgzomg', 'omg'))

//BubbleSort Pseudocode

//Steps
//1. Start looping from with a variable called i at the end of the array towards the beginning
//2. Start an inner loop with a variable called j from the beginning until i - 1
//3. If arr[j] is greater than arr[j+1], swap those two values
//4. Return the sorted array

// function bubbleSort(arr) {
//     let noSwaps; //stop the loop after we've finished sorting so there isnt any needless iterations
//     for (let i = arr.length; i > 0; i--) {
//         noSwaps = true
//         // console.log(arr[i])
//         for (let j = 0; j < i - 1 ; j++) {
//             console.log(arr,arr[j], arr[j+1])
//             if (arr[j] > arr[j+1]) {
//                 // [arr[j], arr[j+1], [arr[j+1], arr[j]]]
//                 let temp = arr[j+1]
//                 arr[j+1] = arr[j]
//                 arr[j] = temp
//                 noSwaps = false
//             }
//         }
//         if (noSwaps) {
//             break
//         }
//     }
//     return arr
// }

function bubbleSort (arr) {
    let noSwaps;
    for (let j = arr.length - 1; j > 0; j--) {
        noSwaps = true
        for (let i = 0; i < j; i++) {
            if (arr[i] > arr[i+1]) {
                let temp = arr[i]
                arr[i] = arr[i+1]
                arr[i+1] = temp
                noSwaps = false
            }
        }
        if (noSwaps) {
            break
        }
    }
    return arr
}

console.log(bubbleSort([5,7,18,9,12,24,1]))

