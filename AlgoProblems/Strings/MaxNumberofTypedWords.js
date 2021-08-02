//===============================================================================
//There is a malfunctioning keyboard where some letter keys do not work. All other keys on the keyboard work properly.
//Given a string text of words separated by a single space (no leading or trailing spaces) and a string brokenLetters of all distinct letter keys that are broken, return the number of words in text you can fully type using this keyboard.
//===============================================================================

//Constraints
// 1 <= text.length <= 104
// 0 <= brokenLetters.length <= 26
// text consists of words separated by a single space without any leading or trailing spaces.
// Each word only consists of lowercase English letters.
// brokenLetters consists of distinct lowercase English letters.


//Steps
//1. Convert text into an array of strings. Set it to a variable called textArray
//2. Initialize a variable called result. Set it to 0
//3. Loop over text input string
//4. Initialize a count variable - set it to 0
//5. Set inner loop and loop over brokenLetters input string
//6. Check if the text input includes letters from brokenLetters input
//7. If yes, include count by 1
//8. Check after each iteration if count is equal to 0. If it is, increase result by 1
//9 Return result at end of function›


const canBeTypedWords = (text, brokenLetters) => {
    text = text.split(' ');
    let result = 0;

    for (let t of text) {
        let count = 0;

        for (let j of brokenLetters) {
            if (t.includes(j)) count++
        }
    }
    return result
}

console.log(canBeTypedWords("leet code", "lt"))