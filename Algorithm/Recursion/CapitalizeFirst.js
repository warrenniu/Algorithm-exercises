//===============================================================================
//Write a recursive function called capitalizeFirst. Given an array of strings, capitalize the first letter of each string in the array.
//===============================================================================

// capitalizeFirst
//['nami','looks','hungry']); // ['Nami','Looks','Hungry']

//Steps
//1. Create a new array that will store each new string with the capitalized first letter
//2. Create a helper method, which will loop through each element in the array
//3. Create a nested for loop which loops over each string, which will capitalize the first letter in each string
//4. Call the helper method 
//5. Return the new array

function capitalizeFirst(arr) {
    let newArray = [];

    function helper(arr) {
        for (let i = 0; i < arr.length; i++) {
            let element = arr[i]
            for (let j = 0; j < 1; j++) {
                let capitalStr = element.charAt(0).toUpperCase() + element.slice(1)
                newArray.push(capitalStr)
            }
        }
    }
    helper(arr)
    return newArray
}




// function capitalizeFirst(arr) {
//     let newArray = [];

//     function helper(arr) {
//         //some code here
//     }
//     helper(arr);
//     return newArray;
// }


// function capitalizeFirst(arr) {
//     let newArray = [];
//     //some code here

//     capitalizeFirst(arr);
//     return newArray;
// }




console.log(capitalizeFirst(['car','taco','banana']))