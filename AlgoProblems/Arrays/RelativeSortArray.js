//===============================================================================
//Given two arrays arr1 and arr2, the elements of arr2 are distinct, and all elements in arr2 are also in arr1. Sort the elements of arr1 such that the relative ordering of items in arr1 are the same as in arr2. Elements that don't appear in arr2 should be placed at the end of arr1 in ascending order.
//===============================================================================

//Constraints
// 1 <= arr1.length, arr2.length <= 1000
// 0 <= arr1[i], arr2[i] <= 1000
//All the elements of arr2 are distinct
//Each arr2[i] is in arr1

//Steps (Multiple Pointers)
//1. Create an empty array and set it to a variable
//2. Create a secondPointer and set it equal to 0. The second Pointer will iterate over arr2
//3. Create a for loop, where the conditional will check to see if arr[secondPointer] === arr[firstPointer]. If true, then push the value of arr[firstPointer] into the new array
//4. Create empty object - frequency Counter and set key value pairs for both arrays
//5. If key doesn't exist in newArray, add arr1 key to end of newArray
//5. Return newArray at end of function

function relativeSortArray(arr1, arr2) {
    let newArray = [];
    let frequencyCounter1 = {}
    let frequencyCounter2 = {}

    for (let rightPointer = 0; rightPointer < arr2.length; rightPointer++) {
        for (let leftPointer = 0; leftPointer < arr1.length; leftPointer++) {
            if (arr2[rightPointer] === arr1[leftPointer]) {
                newArray.push(arr1[leftPointer])
            }
        }
    }
    console.log(newArray)

    for (val of arr1) {
        frequencyCounter1[val] ? frequencyCounter1[val] += 1 : frequencyCounter1[val] = 1
    }

    for (val of newArray) {
        frequencyCounter2[val] ? frequencyCounter2[val] += 1 : frequencyCounter2[val] = 1
    }

    console.log(frequencyCounter1)
    console.log(frequencyCounter2)
    for (key in frequencyCounter1) {
        if (!(key in frequencyCounter2)) {
            let keyInteger = parseInt(key)
            let valueInteger = parseInt(frequencyCounter1[key])
            for (let i = 0; i < valueInteger; i++) {
                newArray.push(keyInteger)
            }
            
        }
    }

    return newArray
}

console.log(relativeSortArray([2, 21, 43, 38, 0, 42, 33, 7, 24, 13, 12, 27, 12, 24, 5, 23, 29, 48, 30, 31], [2, 42, 38, 0, 43, 21]))