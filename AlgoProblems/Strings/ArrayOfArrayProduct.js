//===============================================================================
//Given an array. return the products of each iteration except for the current element iteration
//===============================================================================

function arrayOfArrayProducts(arr) {
    // your code goes here
    let productArray = [];
  
    
    for (let i = 0; i < arr.length; i++) {
        let currentProduct = 1;
      for (let j = 0; j < arr.length; j++) {
        console.log("arr[i] and arr[j]",arr[i], arr[j])
        if (j !== i) {
          currentProduct *= arr[j]
        }
      }
      productArray.push(currentProduct)
    }
    return productArray
    
  }