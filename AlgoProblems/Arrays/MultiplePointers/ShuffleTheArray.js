//===============================================================================
//Given the array nums consisting of 2n elements in the form [x1,x2,...,xn,y1,y2,...,yn].
//Return the array in the form [x1,y1,x2,y2,...,xn,yn].
//===============================================================================

//Constraints
// 1 <= n <= 500
// nums.length == 2n
// 1 <= nums[i] <= 10^3

//Steps
//1. Create an empty array to store shuffled array
//2. Set j = n 
//3. Set up for loop, i = 0 & i < nums.length; i++
//4. With each iteration, push i and j to shuffleArray
//5. Return shuffleArray at end of function

function shuffle(nums,n) {
    let shuffleArray = [];
    let j = n;
    for (let i = 0; i < n ; i++) {
        console.log(nums[i])
        console.log(nums[j])
        shuffleArray.push(nums[i])
        shuffleArray.push(nums[j])
        j++
    }

    return shuffleArray
}

console.log(shuffle([1,1,2,2],2))
