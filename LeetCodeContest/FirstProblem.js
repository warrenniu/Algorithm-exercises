//===============================================================================
//A string s is nice if, for every letter of the alphabet that s contains, it appears both in uppercase and lowercase. For example, "abABB" is nice because 'A' and 'a' appear, and 'B' and 'b' appear. However, "abA" is not because 'b' appears, but 'B' does not.
// Given a string s, return the longest substring of s that is nice. If there are multiple, return the substring of the earliest occurrence. If there are none, return an empty string.
//===============================================================================

//Constraints
//1. 1 <= s.length <= 100
//2. s consists of uppercase and lowercase English letters.

//Steps (Multiple Pointers)
//1. Solve for the edge case - if s length is 1, then return an empty string
//2. Create a empty string & set it equal to a variable
//3. Create two pointers, where one is at index of 0 and the other is at index of 1
//4. Create a conditional - if pointer two is equal to pointer one (either upper or lowercase), than save string to empty string variable. Move right pointer up
//5. If there is no match, move both pointers up
//6. Return string variable at end of function

function longestNiceSubstring(s) {
    let niceString = ""
    let currentCharacter = ""
    let firstPointer = 0;
    let secondPointer = 1;
    let i = 0

    if (s.length === 1) {
        return ""
    }

    // while (i <= s.length) {
    //     currentCharacter = s.charAt(i)
    //     if (currentCharacter == currentCharacter.toUpperCase()) {
    //         console.log("test")
    //     }
    // }
    

}

console.log(longestNiceSubstring("YazaAay"))