//===============================================================================
//Given an array of positive integers numbs, return the maximum possible sum of an ascending subarray in nums. A subarray is defined as a contiguous sequence of numbers in an array. A subarray [numsl, numsl+1, ..., numsr-1, numsr] is ascending if for all i where l <= i < r, numsi < numsi+1. Note that a subarray of size 1 is ascending.
//===============================================================================

//Constraints
// 1 <= nums.length <= 100
// 1 <= nums[i] <= 100

//Sliding Window approach

//Steps
//1. Create a variable called sum, set it equal to nums[0]
//2. Set up two pointers for window -> trailing = 0, leading = 1
//3. Set up a while loop where trailing is less than or equal to leading. If nums[trailing] < nums[leading] then add two together and increment leading by 1
//4. If nums[trailing] > nums[leading], then move trailing to leading and move leading up by 1. Set conditional -> if currentSum is > then sum, then set sum = currentSum. *need to somehow reset currentSum to 1 or trailing value
//5. Return sum at end of function

function maxAscendingSum(nums) {
    let sum = 0
    let trailing = 0;
    let leading = 0;
    
    while (trailing <= leading && nums.length > 1) {
        let currentSum = 0;
        console.log("in while loop")
        if (trailing === nums.length - 1) {
            break
        }
        else if (nums[leading] < nums[leading + 1]) {
            console.log("nums[trailing]", nums[trailing], "nums[leading", nums[leading])
            leading++
        }
        else if (nums[leading] > nums[leading + 1] || leading === nums.length - 1) {
            console.log("nums[trailing]", nums[trailing], "nums[leading", nums[leading])

            for (let i = trailing; i <= leading; i++) {
                currentSum += nums[i]
            }
            if (currentSum > sum) {
                sum = currentSum
            }
            trailing = leading + 1
            leading++
        }
    }
return sum
}

console.log(maxAscendingSum([10,20,30,5,10,50]))
//                                         t     
//                                         l
//currentSum = 60