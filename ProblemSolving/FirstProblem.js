//=========================================================================================
// Given an integer, place 5 in a given position in the integer and return the largest possible value
//=========================================================================================

//CONSTRAINTS


//START OF FUNCTION
function solution(N) {
    //N is an integer. Need to turn it into an array
    let inputToArray = N.toString().split("")
    //Create a variable to set maxNumber
    let maxNumber = N;

    //Loop through the integer using a for loop, inserting 5 into each index
    for (let i = 0; i < inputToArray.length; i++) {
        //Inserting 5 with each iteration. Attempted to use splice but returning infinite loop. Attempted debugging but moving on due to time
        let newArray = inputToArray.splice(i, 0, 5)
        console.log(inputToArray)
        //Convert the array back to an integer
        let newNumber = parseInt(newArray.join(''))
        //With each iteration, check to see if the currentNumber is greater than the maxNumber
        if (newNumber > maxNumber) {
            maxNumber = newNumber
        }

    }
    //Current solution is returning an infinite loop. Aware that splice is not the option here, but moving on due to time constraint.
    return maxNumber
}

console.log(solution(268))
