//===============================================================================
//Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.
//===============================================================================

//Constraints
// 1 <= s.length <= 105
// s consists of only lowercase English letters.


//Steps
//1. Initialize a hash called characters. Set it to an empty hash
//2. Loop through s & populate the characters hash. Set key as the index and value as the index value


function firstUniqChar(s) {
    const freqCounter = {};
    const uniqueCharacters = [];

    for (let i = 0; i < s.length; i++) {
        freqCounter[s[i]] = freqCounter[s[i]] ? freqCounter[s[i]] += 1 : freqCounter[s[i]] = 1
    }

    console.log(freqCounter)

    for (key in freqCounter) {
        if (freqCounter[key] === 1) {
            uniqueCharacters.push(key)
        }
    }

    console.log(uniqueCharacters)

    for (let i = 0; i < s.length; i++) {
        if (s[i] === uniqueCharacters[0]) {
            return i
        }
    }

    return -1
}

console.log(firstUniqChar("leetcode"))