function sum(arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        total += arr[i]
    }
    return total;
    }

    // In the above example, there are two spaces where a variable is declared. However, that number is constant regardless of the length of the array. Therefore, this function is O(1) space.