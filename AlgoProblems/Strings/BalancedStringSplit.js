//===============================================================================
//Balanced strings are those that have an equal quantity of 'L' and 'R' characters.
//Given a balanced string s, split it in the maximum amount of balanced strings.
//Return the maximum amount of split balanced strings.
//===============================================================================

//Constraints
// 1 <= s.length <= 1000
// s[i] is either 'L' or 'R'.
// s is a balanced string.


//Steps
//1. Create a variable called result. Set it to 0
//2. Create a variable called lCount. Set it to 0
//3. Create a variable called rCount. Set it to 0
//4. Initialize a for loop -> if s[i] === "R", rCount += 1. Else, lCount += 1
//5. If rCount === lCount, count += 1
//6. Return count at end of function

function balancedStringSplit(s) {
    let result = 0;
    let lCount = 0;
    let rCount = 0;

    for (let i = 0; i < s.length; i++) {
        if (s[i] === "R") {
            rCount += 1
        } else {
            lCount += 1
        };
        if (lCount === rCount) {
            result += 1
        };
    };
    return result;
};

console.log(balancedStringSplit("RLRRRLLRLL"))