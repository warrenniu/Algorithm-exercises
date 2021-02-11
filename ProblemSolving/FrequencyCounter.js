//===============================================================================
//Write a function called same, which accepts two arrays. The function should return true if every value in the array has it's corresponding value squared in the second array. The frequency of values must be the same.
//===============================================================================

//NAIVE Approach O(N)^2

//Do the arrays match up? If not, automatically returns false and we're done
function same(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false
    }
    for (let i = 0; i < arr1.length; i++) {
        // indexOf is a nested loop, creating the quadratic time complexity
        // Checks to see if there is a squared value in array 2 of a value in array 1
        let correctIndex = arr2.indexOf(arr1[i] ** 2)
        // -1 means that it does not exist (indexOf)
        if (correctIndex === -1) {
            return false
        }
        //If the value exists, we will splice the array and it'll go to the next iteration
        arr2.splice(correctIndex, 1)
    }
    return true
}

// O(n) approach
function same(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false
    }
    //Initializing the object for both objects. Count the different elements in each array
    let frequencyCounter1 = {}
    let frequencyCounter2 = {}

    // Looping over each value of each array
    for (let val of arr1) {
        // Add one to the frequency counter if it exists. If it does not, initialize it with 1
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1 //Why the OR operator here?
    }
    for (let val of arr2) {
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1
    }
    console.log(frequencyCounter1);
    console.log(frequencyCounter2)
    // Looping over the first object frequency counter
    for (let key in frequencyCounter1) {
        // Checking to see if there is a key in frequencyCounter2 that is squared of a key in frequencyCounter1
        if (!(key ** 2 in frequencyCounter2)) {
            return false
        }
        // Checking to see if the values correspond. e.g. if there is two 2's, then there re four 4's
        if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
            return false
        }
    }
   
    return true
}

console.log(same([1,2,3,2,5], [9,1,4,4,11]))

