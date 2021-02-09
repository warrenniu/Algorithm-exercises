function double(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr.push(2* arr[i])
    }
    return newArr;
}

// This function calculates the double value of each index in the array. However, it will create a new array and the number of indexes will be based on n. Therefore, this function is O(n) space.