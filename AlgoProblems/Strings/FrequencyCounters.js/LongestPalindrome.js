//===============================================================================
//Given a string s which consists of lowercase or uppercase letters, return the length of the longest palindrome that can be built with those letters. Letters are case sensitive, for example, "Aa" is not considered a palindrome here.
//===============================================================================

//Constraints
// 1 <= s.length <= 2000
// s consists of lowercase and/or uppercase English letters only.


//Steps
//1. Create a variable called count to store longest palindrome
//2. Create a hash to count the frequency of the input string
//3. Loop through the hash -> if the value is an even number, add that total to the count
//4. Loop through the hash a second time -> If we find a value that is one, return count + 1. Else, return count

function longestPalindrome(s) {

    const set = new Set();
    let count = 0;
    console.log(set)

    for (const char of s) {
        if (set.has(char)) {
            count += 2
            set.delete(char)
            console.log(set)
            console.log("count", count)
        }
        else {
            set.add(char)
            console.log(set)
        }
    }
    return count + (set.size > 0 ? 1 : 0)
}
    // let count = 0;
    // let freqCounter = {};

    // for (let i = 0; i < s.length; i++) {
    //     freqCounter[s[i]] = freqCounter[s[i]] ? freqCounter[s[i]] += 1 : freqCounter[s[i]] = 1
    // }
    // console.log(freqCounter)

    // for (key in freqCounter) {
    //     if (freqCounter[key] % 2 === 0) {
    //         count += freqCounter[key]
    //         console.log("even", count)
    //     }
    //     else if ((freqCounter[key] % 2 !== 0) && freqCounter[key] > 1) {
    //         count += freqCounter[key] - 1
    //         freqCounter[key] = 1
    //         console.log("odd", count)
    //     }
    // }
    // console.log(freqCounter)
    // let result = 0;

    // for (key in freqCounter) {
    //     result += freqCounter[key]
    // }

    // console.log(result)

    // if (result % 2 ===0) {
    //     return count
    // }
    // else {
    //     return count + 1
    // }
    // for (key in freqCounter) {
    //     if (freqCounter[key] === 1) {
    //         return count + 1
    //     }
    //     else {
    //         return count
    //     }
    // }


console.log(longestPalindrome("abccccdd"))


