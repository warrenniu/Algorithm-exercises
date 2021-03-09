//===============================================================================
//Write a funtion called linearSearch which accepts an array and a value, and returns the index at which the value exists. If the value does not exist in the array, return -1. Don't use indexOf to implement this function.
//===============================================================================

// SAMPLE INPUT/OUTPUT

// linearSearch([10,15,20,25,30],15) //1
// linearSearch([9,8,7,6,5,4,3,2,1,0],4) //5
// linearSearch([100],100) //0
// linearSearch([1,2,3,4,5],6) // -1

//Steps
//1. Create a for loop, that starts from zeroth index
//2. If index value is equal to num, return current index
//3. Else, return -1

function linearSearch(arr,num) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === num) {
            return i
        }
    }
    return -1
}

console.log(linearSearch([1,2,3,4,5],6))