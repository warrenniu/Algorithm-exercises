//===============================================================================
//
//===============================================================================

//Constraints
//1. 

//Steps
//1. Create a variable called total, which will store the total number of rotations
//2. Use a for loop, creating a tempTotal variable that takes the difference between the values of the same indexes in their respective arrays
//3. If tempTotal is greater than 5, give us the value of tempTotal % 10
//4. Add tempTotal to total. Return total at end of function


function largeLock(arr1,arr2){
    let total = 0

    for(let i = 0;i<arr1.length;i++){
        let tempTotal = Math.abs(arr2[i] - arr1[i])
        console.log(tempTotal)
        if( tempTotal > 5) {
        let tempVal = 10 % tempTotal

        //For some reason I'm not getting the correct result of tempTotal % 10. Ran out of time trying to debug
        console.log(tempTotal)
        console.log(tempVal)   
        tempTotal = tempVal
        }
        total += tempTotal
    }
    return total
}


//Time Complexity: O(N)
//Space Complexity: O(N)

console.log(largeLock([4,2,1,8,3], [8,3,0,1,6]))
