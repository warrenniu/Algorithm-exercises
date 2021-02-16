//===============================================================================
//Write a function where given an array nums, we move all 0's to the end of it while maintaining the relative order of the non-zero elements
//===============================================================================

//Constraints
//1. You must do this in-place without making a copy of the array
//2. Minimize the total number of operations

//Steps to take
//1. Loop through the array using a for loop
//2. Set conditional for nums[i] === 0 ; push the 0 to the end of the array
//3. return nums at end of the function

function moveZeroes(nums) {
    let counter = 0
    for (i = 0; i < nums.length; i++) {
        if (nums[i] === 0) {
            // nums.push(nums[i])
            nums.splice(i, 1)
            i--
            counter +=1
            console.log(counter)
        }
    }
    for (i = 0; i < counter; i++) {
        nums.push(0)
    }
    // for (val of nums) {
    //     if (nums[val] === 0) {
    //         nums.push(nums.shift())
    //         console.log(nums)
    //     }
    // }
    return nums
}

console.log(moveZeroes([0,1,0,3,12]))