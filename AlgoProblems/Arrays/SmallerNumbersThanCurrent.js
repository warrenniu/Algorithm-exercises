//===============================================================================
//Given the array nums, for each nums[i] find out how many numbers in the array are smaller than it. That is, for each nums[i] you have to count the number of valid j's such that j != i and nums[j] < nums[i].
// Return the answer in an array.
//===============================================================================

//Constraints
// 2 <= nums.length <= 500
// 0 <= nums[i] <= 100

//Steps
//1. Instantiate newArray and set to empty array
//2. Set up a outer for loop where i is 0 and iterate the length of nums
//3. Instantiate count variable, set it to 0
//4. Set up a inner for loop where j is 0 and iterate the length of nums
//5. If j !== i && nums[j] < nums[i], increase count by 1
//6. Push count into newArray
//7. Return newArray at end of function

function smallerNumbersThanCurrent(nums) {
    let newArray = [];
    
    for (let i = 0; i < nums.length; i++) {
        let count = 0;
        
        for (let j = 0; j < nums.length; j++) {
            if (j !== i && nums[j] < nums[i]) {
                count += 1
                console.log(count)
            }
        }
        newArray.push(count)
    }
    return newArray
    
}


//leetcode
// function smallerNumbersThanCurrent(nums) {
//     //slice -> original array will not be changed. can also use spread operator
// let sorted = [...nums].sort((a,b) => a - b);
// console.log(sorted)
// let result = [];
// for(let i=0; i<nums.length; i++){
//     console.log(sorted, nums[i])
//     console.log(sorted.indexOf(nums[i]))
//     result.push(sorted.indexOf(nums[i]));
// }
// return result;
// }


console.log(smallerNumbersThanCurrent([8,1,2,2,3]))