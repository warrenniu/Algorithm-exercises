//===============================================================================
//Write a pivot helper function for our quick sort
//===============================================================================


// - It will help to accept three arguments: an array, a start index, and an end index (these can default to 0 and the array length minus 1, respectively)
// - Grab the pivot from the start of the array
// - Store the current pivot index in a variable (this will keep track of where the pivot should end up)
// - Loop through the array from the start until the end → If the pivot is greater than the current element, increment the pivot index variable and then swap the current element with the element at the pivot index
// - Swap the starting element (i.e. the pivot) with the pivot index
// - Return the pivot index

function pivotHelper(arr, start=0, end=arr.length-1) {
    // let start = 0;
    // let end = arr.length - 1;

    function swap(array,i,j) {
        let temp = array[i]
        arr[i] = arr[j]
        arr[j] = temp

    }

    let tracker = arr[start];
    let swapIndex = start;

    for (let i = start + 1; i < arr.length; i++) {
        if (tracker > arr[i]) {
            swapIndex++
            swap(arr,swapIndex, i)
        }

        console.log(arr)
        console.log(tracker)
    }
    swap(arr,start,swapIndex)
    return swapIndex
}

function quickSort(arr, left = 0, right = arr.length - 1) {
    if (left < right) {
        let pivotIndex = pivotHelper(arr, left, right)

        //left
        quickSort(arr,left, pivotIndex - 1)

        //right
        quickSort(arr, pivotIndex + 1, right)


    }
    return arr
}


console.log(quickSort([4,8,2,1,5,7,6,3]))