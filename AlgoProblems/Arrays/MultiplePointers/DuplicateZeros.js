//===============================================================================
//Given a fixed length array arr of integers, duplicate each occurrence of zero, shifting the remaining elements to the right. Note that elements beyond the length of the original array are not written. Do the above modifications to the input array in place, do not return anything from your function
//===============================================================================

//Constraints
// 1 <= arr.length <= 10000
// 0 <= arr[i] <= 9


//Steps
//1. Set up a for loop where i = 0.
//2. If arr[i] is equal to 0, insert a 0 at i + 1
//3. Remove last element of the array

function duplicateZeros(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            arr.splice(i,0,0)
            arr.splice(-1)
            i++
            
        }
    }

}

console.log(duplicateZeros([1,2,3]))