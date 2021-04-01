//===============================================================================
//Given two strings a and b, return true if you can swap two letters in a so the result is equal to b, otherwise, return false. Swapping letters is defined as taking two indices i and j (0-indexed) such that i != j and swapping the characters at a[i] and b[j]. For example, swapping at indices 0 and 2 in "abcd" results in "cbad".
//===============================================================================

//Constraints
// 1 <= a.length, b.length <= 2 * 104
// a and b consist of lowercase letters.


//Steps
//1. Create two empty arrays to store the values of the array that doesn't match with their corresponding element in the second string

function buddyString(a,b) {
    let a1 = [];
    let a2 = [];

    if (a.length === 2 && b.length === 2) {
        if (a === b) {
            return true
        }
        else {
            return false
        }
    }
    for (let i = 0; i < a.length; i++) {
        if (a[i] !== b[i]) {
            a1.push(a[i])
            a2.push(b[i])
        }
    }

    a1.sort(function(a,b) { return a.localeCompare(b)})
    a2.sort(function(a,b) { return a.localeCompare(b)})

    console.log(a1)
    console.log(a2)

    if (a1.length === 0 || a2.length === 0) return false 
    


return true
}

console.log(buddyString("ab", "ba"))