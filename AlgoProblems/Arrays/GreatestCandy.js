//===============================================================================
//There are n kids with candies. You are given an integer array candies, where each candies[i] represents the number of candies the ith kid has, and an integer extraCandies, denoting the number of extra candies that you have.
//Return a boolean array result of length n, where result[i] is true if, after giving the ith kid all the extraCandies, they will have the greatest number of candies among all the kids, or false otherwise.
//Note that multiple kids can have the greatest number of candies.
//===============================================================================

//Constraints
// n == candies.length
// 2 <= n <= 100
// 1 <= candies[i] <= 100
// 1 <= extraCandies <= 50

//Steps
//1. Initialize an empty array to store boolean values
//2. Initialize a for loop -> each iteration add the value of extraCandies
//3. Initialize a variable called currentValue. Set value of iteration to this variable
//4. Initialize a inner for loop. If currentValue < array[i], set newLarge = currentValue. If currentValue === newLarge, return false. else, true
//5. Return result array at end of function

function kidsWithCandies(candies, extraCandies) {
    let resultArray = [];

    for (let i = 0; i < candies.length; i++) {
        let currentValue = candies[i] + extraCandies

        for (let j = 0; j < candies.length; j++) {
            if (currentValue < candies[j] && candies[i] !== candies[j]) {
                var newLarge = currentValue
            }
        }
        currentValue === newLarge ? resultArray.push(false) : resultArray.push(true)
    }

    return resultArray

}

console.log(kidsWithCandies([12,1,12], 10))