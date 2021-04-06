//===============================================================================
//Given an array of positive integers numbs, return the maximum possible sum of an ascending subarray in nums. A subarray is defined as a contiguous sequence of numbers in an array. A subarray [numsl, numsl+1, ..., numsr-1, numsr] is ascending if for all i where l <= i < r, numsi < numsi+1. Note that a subarray of size 1 is ascending.
//===============================================================================

//Constraints
// 1 <= nums.length <= 100
// 1 <= nums[i] <= 100

//Steps
//1. Create a exmpty empty to store the sums of the values
//2. Set two variables called max & sum which will track the current sum of the subarray, and max which will check the max value between the current sum & the max value being pushed into the array
//3. If the value of i+1 is less than the current iteration, we'll reset the max and sum value to 0

// function maxAscendingSum(nums) {
//     let sum = 0
//     let trailing = 0;
//     let leading = 0;
    
//     while (trailing <= leading && nums.length > 1) {
//         let currentSum = 0;
//         console.log("in while loop")
//         if (trailing === nums.length - 1) {
//             break
//         }
//         else if (nums[leading] < nums[leading + 1]) {
//             console.log("nums[trailing]", nums[trailing], "nums[leading", nums[leading])
//             leading++
//         }
//         else if (nums[leading] > nums[leading + 1] || leading === nums.length - 1) {
//             console.log("nums[trailing]", nums[trailing], "nums[leading", nums[leading])

//             for (let i = trailing; i <= leading; i++) {
//                 currentSum += nums[i]
//             }
//             if (currentSum > sum) {
//                 sum = currentSum
//             }
//             trailing = leading + 1
//             leading++
//         }
//     }
// return sum
// }

function maxAscendingSum(nums) {
    let max = 0;
    let sum = 0;
    let newArray = [];

    for (let i = 0; i< nums.length; i++) {
        sum += nums[i]
        max = Math.max(max, sum)
        console.log(newArray)
        newArray.push(max)

        if (nums[i+1] <= nums[i]) {
            sum = 0;
            max = 0;
        }
    }
    console.log(newArray)
    return Math.max(...newArray)
}

console.log(maxAscendingSum([10,20,30,5,10,50]))
//                                         t     
//                                         l
//currentSum = 60