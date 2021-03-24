//Selection Sort Pseudocode

//- Store the first element as the smallest value you've seen so far
//- Compare this item to the next item in the array until you find a smaller number
//- If a smaller number is found, designate that smaller number to be the new "minimum" and continue until the end of the array
//- If the "minimum" is not the value (index) you initially began with, swap the two values
//- Repeat this with the next element (don't want to keep iterating the same length of the array coz minimum will always be the same) until the array is sorted

// function selectionSort(arr) {
//     // console.log(smallestNumber)
//     for (let i = 0; i < arr.length; i++) {
//         let smallestNumber = i
//         console.log(smallestNumber)
//         for (let j = i + 1; j < arr.length; j++) {
//             // console.log(arr[j], arr[i])
//             console.log(j,i)
//             if (arr[j] < arr[smallestNumber]) {
//                 smallestNumber = j
//                 console.log("new small number", smallestNumber)
                
//             }
//         }
//         if (arr[i] !== arr[smallestNumber]) {
//             let temp = arr[smallestNumber]
//             arr[smallestNumber] = arr[i]
//             arr[i] = temp
//             console.log("switch!")


//             // [arr[i], arr[smallestNumber], [arr[smallestNumber], arr[i]]]

//         }
       
//     }
// return arr
// }

function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let smallestNumber = i;
        console.log(smallestNumber)
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[smallestNumber] > arr[j]) {
                smallestNumber = j
                console.log("new small number", smallestNumber)
            }
        }
        if (arr[i] !== arr[smallestNumber]) {
            let temp = arr[i]
            arr[i] = arr[smallestNumber]
            arr[smallestNumber] = temp
        }
    }
    return arr
}

console.log(selectionSort([5,7,2,9,8,6]))