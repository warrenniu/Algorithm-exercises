//===============================================================================
// Given a string s and a character c that occurs in s, return an array of integers answer where answer.length == s.length and answer[i] is the distance from index i to the closest occurrence of character c in s.
// The distance between two indices i and j is abs(i - j), where abs is the absolute value function.
//===============================================================================

//Constraints
// 1 <= s.length <= 104
// s[i] and c are lowercase English letters.
// It is guaranteed that c occurs at least once in s.

//Steps
//1. Initialize an empty array called indices. This will store indices where c appears in s
//2. Initialize an empty array aclled result. This will be returned at end of function
//3. Iterate over s -> If s[i] === c, push index to indices
//4. Iterate over s -> Initialize variable called minValue and set it to Infinity -> Inner for loop iterating over indices. Subtract value from each value in indices. If calculation is less than minValue, set it to minValue
//5. Push minValue into result
//6. Return result at end of function

function shortestToChar(s, c) {
    let result = [];
    let indices = [];

    for (let i = 0; i < s.length; i++) {
        if (s[i] === c) indices.push(parseInt(i))
    }
    for (let i = 0; i < s.length; i++) {
        let minValue = Infinity;
        for (let j = 0; j < indices.length; j++) {
            let calculation = Math.abs(indices[j] - parseInt(i))

            if (calculation < minValue) {
                minValue = calculation
            }

        }
        result.push(minValue)
    }
    return result
}

console.log(shortestToChar("aaab", "b"))