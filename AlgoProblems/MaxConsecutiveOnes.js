//===============================================================================
//Write a function where given a binary array, find the maximum number of consecutive 1s in this array
//===============================================================================

//Constraints
//The input array will only contain 0 and 1
//The length of input array is a positive integer and will not exceed 10,000

function findMaxConsecutiveOnes(nums) {
    let currentNumber = 0
    let maxNumber = 0
    let newArray = []


    if (nums[-1] !== 0) {
        nums.push(0)
    }

    for (i = 0; i < nums.length; i++) {
        if (nums[i] === 1) {
            currentNumber += 1
            console.log(currentNumber)
        }
        else if (nums[i] === 0) {
            newArray.push(currentNumber)
            currentNumber = 0
            console.log(newArray)
        }
    }

    for (val of newArray) {
        if (val > maxNumber) {
            maxNumber = val
        }
    }
   return maxNumber
}


console.log(findMaxConsecutiveOnes([1,0,1,1]))

//Kevin's solution
// function findMaxConsecutiveOnes (nums){
//     let counter = 0
//     let innerCounter = 0
//     //counter = 4
//     //innercounter = 4

//     for (let i = 0; i<nums.length;i++){

//        if(nums[i] === 1){
//            innerCounter ++
//            if(innerCounter > counter){
//                counter = innerCounter
//            }

//        }
//        else if(nums[i] !== 1){
//            innerCounter = 0
//        }
//     }
//     return counter
// }