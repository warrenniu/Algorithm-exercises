//=========================================================
//Given an array of integers nums. A pair (i,j) is called good if nums[i] == nums[j] and i < j. Return the number of good pairs.
//=========================================================

//Constraints
// 1 <= nums.length <= 100
// 1 <= nums[i] <= 100

//Steps
//1. Instantiate a counter variable - set it to 0
//2. Set up a outer for loop -> setting i to 0
//3. Set up a inner for loop -> setting j to 1
//4. Set conditional -> if nums[i] == nums[j], increase count by 1
//5. Return count at end of function

function numIdenticalPairs(nums) {
    let count = 0;

    for (let i = 0; i < nums.length; i++) {
        for (let j = i+1; j < nums.length; j++) {
            if (nums[i] === nums[j] && i !== j) {
                count++
                console.log("nums[i]", nums[i], "nums[j]", nums[j], "count", count)
            } else {
            console.log("NOT MATCHING","nums[i]", nums[i], "nums[j]", nums[j])
            }
        }
    }
    return count

}

console.log(numIdenticalPairs([1,2,3]))
//(0,3) 1
//(0,4) 2
