//===============================================================================
// You are given an integer array nums (0-indexed). In one operation, you can choose an element of the array and increment it by 1.
// For example, if nums = [1,2,3], you can choose to increment nums[1] to make nums = [1,3,3].
// Return the minimum number of operations needed to make nums strictly increasing.
// An array nums is strictly increasing if nums[i] < nums[i+1] for all 0 <= i < nums.length - 1. An array of length 1 is trivially strictly increasing.
//===============================================================================

//Constraints
// 1 <= nums.length <= 5000
// 1 <= nums[i] <= 104

//Steps (Multiple Pointers)
//1. Create a variable called count & set it to 0
//2. Set pointer j = 1
//3. Set a for loop where i = 0
//4. Set originalValue = nums[j]
//5. If j < i, set nums[j] = nums[i] + 1. Set count += nums[i] - nums[j] + 1
//6. If j === i, set nums[j] += 1, count += 1
//7. j++
//8. Return count at end of function

function minOperations(nums) {
    let count = 0;
    let j = 1;

    for (let i = 0; i < nums.length; i++) {
        let originalValue = nums[j];

        if (nums[j] < nums[i]) {
            nums[j] = nums[i] + 1
            count += ((nums[i] - originalValue) + 1) 
            console.log(count)
        }
        if (nums[j] === nums[i]) {
            nums[j] += 1
            count += 1
            console.log(count)
        }
        j++
    }
return count
}

console.log(minOperations([1,5,2,4,1]))