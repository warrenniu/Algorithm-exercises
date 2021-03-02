//===============================================================================
//Write a recursive function called flatten which accepts an array of arrays and returns a new array with all values flattened
//===============================================================================

// SAMPLE INPUT/OUTPUT
// flatten([1, 2, 3, [4, 5] ]) // [1, 2, 3, 4, 5]
// flatten([1, [2, [3, 4], [[5]]]]) // [1, 2, 3, 4, 5]
// flatten([[1],[2],[3]]) // [1,2,3]
// flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) // [1,2,3]

function flatten(arr) {
    let newArray = [];

    function helper(arr) {
        for (let i = 0; i < arr.length; i++) {
            let element = arr[i]; 
            console.log(element) 
            if (Array.isArray(element)) {
                helper(element)
            }
            else {
                newArray.push(element)
            }
        }
    }
    helper(arr)
    return newArray

}

console.log(flatten([1,2,3,[4,5]]))