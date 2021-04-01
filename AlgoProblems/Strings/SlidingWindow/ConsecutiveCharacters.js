//===============================================================================
//Given a string s, the power of the string is the maximum length of a non-empty substring that contains only one unique character. Return the power of the string.
//===============================================================================

//Constraints
// 1 <= s.length <= 500
// s contains only lowercase English letters.


//Steps
//1. Create a variable called currentPower that will store the current max of consecutive characters. Set it equal to 1
//1. Create a variable called totalPower which will store the total max of consecutive characters.
//2. Set up a for loop where i is equal to 0, increment by one with each iteration. 
//3. Set up conditional if statement - if s[i] === s[i+1], increase count by 1. if not, set currentPower = totalPower. Reset currentPower to 1
//4. Return totalPower at end of function

// function maxPower(s) {
//     let currentPower = 1;
//     let totalPower = 1;

//     if (s.length === 2) {
//         if (s[0] === s[1]) {
//             return 2
//         }
//     }
//     for (let i = 0; i < s.length - 1; i++) {
//         if (s[i] === s[i+1]) {
//             console.log("s[i]", s[i], "s[i+1]", s[i+1])
//             currentPower += 1
//         }
//         else {
//             console.log("totalPower", totalPower)
//             if (totalPower <= currentPower) {
//             totalPower = currentPower
//             console.log("totalPower", totalPower)
//             currentPower = 1
//         }
//     }
//     }
//     return totalPower

// }

function maxPower(s) {
    let power = 1;
    let start = 0;

    for (let trailing = 1; trailing < s.length; trailing++) {
        if (s[start] !== s[trailing]) {
            start = trailing
        }
        // console.log("start", start)
        console.log("start", start, "trailing", trailing)
        power = Math.max(power, trailing - start + 1)
    }
    return power
}

console.log(maxPower("leetcode"))

