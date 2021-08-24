//===============================================================================
//Given two strings s and t, return true If t is an anagram of s, and false otherwise
//===============================================================================

//Constraints
// 1 <= s.length, t.length <= 5 * 104
// s and t consist of lowercase English letters.

function isAnagram(s,t) {
    if (s.length !== t.length) return false 
    console.log(s.split('').sort().join(''))
    return s.split('').sort().join('') === t.split('').sort().join('')

}

console.log(isAnagram("xaaddy", "xbbccy"))