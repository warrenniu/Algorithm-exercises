//===============================================================================
//Given an integer array nums of 2n integers, group these integers into n pairs (a1, b1), (a2 , b2), ..., (aN, bN) such that the sum of min(ai, bi) for all i is maximized. Return the maximized sum
//===============================================================================

function arrayPairSum(nums) {
    nums.sort(function(a,b) {return a-b})
    console.log(nums)
    let maximumNumber = 0
    for (let i=0; i < nums.length; i += 2) {
        maximumNumber = maximumNumber + nums[i]
    }
    return maximumNumber
}

console.log(arrayPairSum([6,2,6,5,1,2]))