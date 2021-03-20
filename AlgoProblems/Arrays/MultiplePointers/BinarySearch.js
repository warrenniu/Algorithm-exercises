//===============================================================================
//Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1
//===============================================================================

//Constraints
// 1 <= nums.length <= 104
// -9999 <= nums[i], target <= 9999
// All the integers in nums are unique.
// nums is sorted in an ascending order.

//Steps
//1. Set two pointers. One at the beginning of the array and one at the end
//3. Set up a third pointer 
//2. Set up a while loop where left < right
//2. Get the average of the values of of the pointers. Use Math.floor
//3. Set up conditionals. If target is greater than average, move right down. If target is less than average, move left up
//4. If target is equal to average, return index
//5. Else, return -1

function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    let average = Math.floor((left + right) / 2)

    while (left <= right && target != arr[average]) {
        if (target > arr[average]) {
            left = average + 1
        }
        else if (target < arr[average]) {
            right = average - 1
        }
        average = Math.floor((left + right) / 2)
    }
    if (target === arr[average]) {
        return average
    }
    return -1
}

console.log(binarySearch([-1,0,3,5,9,12],9))
