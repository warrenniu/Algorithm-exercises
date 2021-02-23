class Solution {
    solve(nums) {
        let sorted = [...nums].sort((a,b)=> a-b)
        let count = 0
        for(let i = 0; i< nums.length; i++){
            if(nums[i] === sorted[i]) count++
        }
        return count
    }
}
