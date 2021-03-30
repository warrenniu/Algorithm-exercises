//===============================================================================
//You are given two strings s1 and s2 of equal length. A string swap is an operation where you choose two indices in a string (not necessarily different) and swap the characters at these indices. Return true if it is possible to make both strings equal by performing at most one string swap on exactly one of the strings. Otherwise, return false
//===============================================================================

//Constraints
// 1 <= s1.length, s2.length <= 100
// s1.length == s2.length
// s1 and s2 consist of only lowercase English letters.


//Steps
//1. Create two empty arrays, a1 & a2, which will store the elements of each string that doesn't match with the other string in their respective index
//2. Set up a for loop to loop over s1 -> set conditional to see if the element of s1[i] matches with s2[i]. If it doesn't store both values into their respective arrays
//3. Sort the two arrays in alphabetical order using localeCompare string method
//4. Set up two conditional - if either array's length is greater than 2 (we would need to do more than one swap) return false. If the value of the first index doesn't equal the value of the first index in the second array (same with the second indices) then return false 


function areAlmostEqual(s1,s2) {

    let a1 = [];
    let a2 = [];

    for (let i = 0; i < s1.length; i++) {
        console.log(s1[i])
        if (s1[i] !== s2[i]) {
            a1.push(s1[i])
            a2.push(s2[i])
        }
    }
    console.log(a1)
    console.log(a2)

    // a1.sort(function(a,b) { return a - b })
    // a2.sort(function(a,b) { return a - b })

    // a1.sort((x, y) => x.localeCompare(y));
    a1.sort(function(a,b) {return a.localeCompare(b)})
    a2.sort((x, y) => x.localeCompare(y));
    console.log(a1)
    console.log(a2)
    // a1.sort(function(a,b) {return a - b}

    if (a1.length > 2 || a2.length > 2) return false;
    if (a1[0] != a2[0] || a1[1] != a2[1]) return false;
    return true;



  

}

console.log(areAlmostEqual("abcd", "dcba"))