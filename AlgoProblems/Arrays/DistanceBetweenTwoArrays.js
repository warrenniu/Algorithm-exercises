//===============================================================================
//Given two integer arrays arr1 and arr2, and the integer d, return the distance value between the two arrays.
// The distance value is defined as the number of elements arr1[i] such that there is not any element arr2[j] where |arr1[i]-arr2[j]| <= d.
//===============================================================================

//Constraints
// 1 <= arr1.length, arr2.length <= 500
// -10^3 <= arr1[i], arr2[j] <= 10^3
// 0 <= d <= 100

//Steps
//1. Initialize a variable called result. This will hold the value that we will return at end of function
//2. Initialize a outer for loop to iterate over arr1. Set i = 0
//3. Initialize a variable called currentSum. This will hold the current sum of arr1[i] - arr2[i]
//4. Initialize a inner for loop to iterate over arr2. Set conditional. If arr1[i] - arr2[i] (currentSum) <= d, break. If loop finishes, add 1 to result
//5. Return result at end of function

function findTheDistanceValue(arr1, arr2, d) {
    let result = 0;
    let array = [];
    for (let i = 0; i < arr1.length; i++) {
        console.log("arr1", arr1[i])
        for (let j = 0; j < arr2.length; j++) {
            console.log("arr1", arr1[i], "arr2", arr2[j] )
            let currentSum = Math.abs(arr1[i] - arr2[j])
            console.log(arr2[j])
            console.log(currentSum)
            array.push(currentSum)
            
            console.log(array)
        }
        console.log(array)
        if (array.every(num => num > d)) {
            result += 1
        }
        array = []
    }
    return result
}

console.log(findTheDistanceValue([2,1,100,3], [-5,-2,10,-3,7], 6))