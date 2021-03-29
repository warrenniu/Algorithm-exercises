//===============================================================================
//Write a function called binarySearch which accepts a sorted array and a value and returns the index at which the value exists. Otherwise, return -1. 
//===============================================================================

// SAMPLE INPUT/OUTPUT

// binarySearch([1,2,3,4,5],2) //1
// linearSearch([1,2,3,4,5],3) //2
// linearSearch([1,2,3,4,5],5) //4
// linearSearch([1,2,3,4,5],6) // -1

//Steps
//1. Create two pointers. left = 0; right = arr.length - 1
//2. Create a while loop where conditional is left < right
//3. Create a third pointer where index is right / left (convert to integer if float)
//4. If third pointer equals num, return index of third pointer
//5. If third pointer value is greater than num, set right equal to third pointer index
//6. If third pointer value is less than num, set left equal to third pointer index
//7. Return -1 at end of function

function binarySearch(arr,num) {
    let left = 0;
    let right = arr.length - 1;
    let middle = Math.floor((left + right) / 2)
    
    while (arr[middle] !== num && left <= right) {
        if (num < arr[middle]) {
            right = middle - 1;
        }
        else if (num > arr[middle]) {
            left = middle + 1;
        }
        middle = Math.floor((left + right) / 2)
    }

    if (arr[middle] === num) {
        return middle
    }
   
    return -1
}

console.log(binarySearch([2,5,6,9,13,15,28,30],15))