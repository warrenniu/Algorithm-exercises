//===============================================================================
//Write a function where given a binary array, find the maximum number of consecutive 1s in this array
//===============================================================================

//Constraints
//The input array will only contain 0 and 1
//The length of input array is a positive integer and will not exceed 10,000

// function findMaxConsecutiveOnes(nums) {
//     let currentNumber = 0
//     let maxNumber = 0
//     let newArray = []


//     if (nums[-1] !== 0) {
//         nums.push(0)
//     }

//     for (i = 0; i < nums.length; i++) {
//         if (nums[i] === 1) {
//             currentNumber += 1
//         }
//         else if (nums[i] === 0) {
//             newArray.push(currentNumber)
//             currentNumber = 0
//         }
//     }

//     for (val of newArray) {
//         if (val > maxNumber) {
//             maxNumber = val
//         }
//     }
//    return maxNumber
// }

//Kevin's solution
//===============================================================================
//Write a function where given a binary array, find the maximum number of consecutive 1s in this array
//===============================================================================

//Constraints
//The input array will only contain 0 and 1
//The length of input array is a positive integer and will not exceed 10,000

function findMaxConsecutiveOnes(nums) {
    let counter = 0
    let insideCounter = 0
    //counter = 2
    //insideCounter = 2

    for (i = 0; i < nums.length; i++) {
        if (nums[i] === 1) {
            insideCounter +=1 
            if (insideCounter > counter) {
                counter = insideCounter
                console.log(counter)
            }
        
        } else if (nums[i] ===0) {
            insideCounter = 0
        }
    }
    return counter
}

console.log(findMaxConsecutiveOnes([1,0,1,1]))