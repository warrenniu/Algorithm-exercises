//===============================================================================
//Given an array of integers arr, you're asked to calculate for each index i the product of all integers except the integer at that index (i.e. except arr[i]). Implement a function arrayOfArrayProducts that takes an array of integers and returns an array of the products. Solve without using division and analyze your solution's time and space complexities.
//===============================================================================

//testcase 1 [8,10,2] // [20,16,80]
//testcase 2 [2,7,3,4] // [84,24,56,42]

function arrayOfArrayProducts(arr) {
    let productArray = [];

    for (let i = 0; i < arr.length; i++) {
        let currentProduct = 1;
        for (let j = 0; j < arr.length; j++) {
            if (j !== i) {
                currentProduct *= arr[j]
            }
        }
        productArray.push(currentProduct)
    }
return productArray
}

console.log(arrayOfArrayProducts([8,10,2]))