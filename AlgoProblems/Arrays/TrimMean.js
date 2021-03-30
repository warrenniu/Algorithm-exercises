//===============================================================================
//Given an integer array arr, return the mean of the remaining integers after removing the smallest 5% and the largest 5% of the elements.
//Answers within 10-5 of the actual answer will be considered accepted.
//===============================================================================

//Constraints
// 20 <= arr.length <= 1000
// arr.length is a multiple of 20.
// 0 <= arr[i] <= 105

//Steps
//1. create total variable = 0
//1. set variable for arr.length
//2. set fivePercent variable = arr.length * .05
//3. set variable for Math.floor of fivePercent
//4. Do two slices - one at beginning of array and one at end of array 
//5. Set up for loop - add all elements in array together and set it equal to total
//6. return total / new arr.length

function trimMean(arr) {
    let total = 0;
    let sortArray = arr.sort(function (a, b) { return a - b })
    let length = sortArray.length;
    let fivePercent = length * .05
    console.log(fivePercent)
    let divide = Math.floor(fivePercent)
    console.log(arr.splice(0, divide))
    console.log(arr)

    console.log(arr.splice(-divide))
    // let lastElements = arr.slice(-divide)
    console.log(arr)

    for (let i = 0; i < arr.length; i++) {
        total += arr[i]
        // console.log(total)
    }

    return total / arr.length

}

console.log(trimMean([4,8,4,10,0,7,1,3,7,8,8,3,4,1,6,2,1,1,8,0,9,8,0,3,9,10,3,10,1,10,7,3,2,1,4,9,10,7,6,4,0,8,5,1,2,1,6,2,5,0,7,10,9,10,3,7,10,5,8,5,7,6,7,6,10,9,5,10,5,5,7,2,10,7,7,8,2,0,1,1]))