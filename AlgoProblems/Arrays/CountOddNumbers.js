//===============================================================================
//Given two non-negative integers low and high. Return the count of numbers between low and high (inclusive)
//===============================================================================

//Constraints
//1. 0 <= low <= high <= 10^9

//Steps
//1. Create a empty array to store odd values
//2. Set a for loop. Set i = low; i <= high; i++
//3. Conditional. If i % 2 !== 0, push i into empty array
//4. Return length of the array

function countOdds(low, high) {
    let oddsArray = [];

    for (i = low; i <= high; i++) {
        if (i % 2 !== 0) {
            oddsArray.push(i)
        }
    }
    return oddsArray.length

}

//leetcode solution
// function countOdds(low, high) {
//     const odds = Math.floor((high - low) / 2);
//     return (low % 2 === 0) && (high % 2 === 0) ? odds : odds + 1;
// }

console.log(countOdds(3, 8))