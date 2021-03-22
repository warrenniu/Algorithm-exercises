//Steps
//1. Break up the array into halves until you have arrays that are empty or have one element
//2. Once you have smaller sorted arrays, merge those arrays with other sorted arrays until you are back at the full length of the array
//3. Once the array has been merged back together, return the merged (and sorted!) array

function mergeTwoLists(arr1, arr2) {
    let newArray = [];
    let left = 0;
    let right = 0;
    let total = arr1.length + arr2.length
    console.log(total)


    //    for (let i = 0; i < total ; i++) {
    //         if (arr1[left] <= arr2[right] || arr2[right] === undefined ) {
    //             newArray.push(arr1[left])
    //             left += 1
    //             // console.log(newArray)

    //         }
    //         else if (arr1[left] > arr2[right] || arr1[left] === undefined) {
    //             newArray.push(arr2[right])
    //             right += 1
    //             // console.log(newArray)

    //         }
    //     }

    while (left < arr1.length && right < arr2.length ) {
        if (arr1[left] <= arr2[right]) {
            newArray.push(arr1[left])
            left += 1
        }
        else if (arr1[left] > arr2[right]) {
            newArray.push(arr2[right])
            right += 1

        }


    }
    while (left < arr1.length) {
        newArray.push(arr1[left])
        left++
    }
    while (right < arr2.length) {
        newArray.push(arr2[right])
        right++
    }

    return newArray
}



function mergeSort(arr) {
    if (arr.length <= 1) return arr;
    let mid = Math.floor(arr.length / 2);
    let left = mergeSort(arr.slice(0,mid));
    let right = mergeSort(arr.slice(mid));

    return mergeTwoLists(left, right)


}