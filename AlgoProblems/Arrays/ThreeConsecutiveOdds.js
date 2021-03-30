//===============================================================================
//Given an integer array arr, return true if there are three consecutive odd numbers in the array. Otherwise, return false
//===============================================================================

//Constraints
// 1 <= arr.length <= 1000
// 1 <= arr[i] <= 1000

//Steps
//1. Set up a for loop where i = 0. 
//2. Set up conditional where arr[i] % 2 !== 0 && arr[i + 1] % 2 !== 0 % arr[i + 2] % 2 !==0, return true
//3. Return false at end of function

function threeConsecutiveOdds(arr) {

    if (arr.length === 3) {
            if (arr[0] % 2 !== 0 && arr[1] % 2 !== 0 && arr[2] % 2 !== 0) {
                return true
            }
        
        
    }

    for (let i = 0; i < arr.length - 2; i++) {
        if (arr[i] % 2 !== 0 && arr[i+1] % 2 !== 0 && arr[i+2] % 2 !== 0) {
            return true
        }
    }
return false
}

console.log(threeConsecutiveOdds([102,780,919,897,901]))