//===============================================================================
//A sentence S is given, composed of words separated by spaces. Each word consists of lowercase and uppercase letters only.
// We would like to convert the sentence to "Goat Latin" (a made-up language similar to Pig Latin.)
// The rules of Goat Latin are as follows:
// If a word begins with a vowel (a, e, i, o, or u), append "ma" to the end of the word.
// For example, the word 'apple' becomes 'applema'.
// If a word begins with a consonant (i.e. not a vowel), remove the first letter and append it to the end, then add "ma".
// For example, the word "goat" becomes "oatgma".
// Add one letter 'a' to the end of each word per its word index in the sentence, starting with 1.
// For example, the first word gets "a" added to the end, the second word gets "aa" added to the end and so on.
// Return the final sentence representing the conversion from S to Goat Latin. 
//===============================================================================

//Constraints
// S contains only uppercase, lowercase and spaces. Exactly one space between each word.
// 1 <= S.length <= 150.

//Examples
// Example 1:
// Input: "I speak Goat Latin"
// Output: "Imaa peaksmaaa oatGmaaaa atinLmaaaaa"

// Example 2:
// Input: "The quick brown fox jumped over the lazy dog"
// Output: "heTmaa uickqmaaa rownbmaaaa oxfmaaaaa umpedjmaaaaaa overmaaaaaaa hetmaaaaaaaa azylmaaaaaaaaa ogdmaaaaaaaaaa"


//Steps
//1. Create an array called vowels that has all the vowels 
//2. Loop over the vowel array -> set conditional. If S[0] === vowel[i], S.concat("ma").

function toGoatLatin(S) {
    let s = S.split(" ")
    console.log(s)
    const vowels = ["A","E","I","O","U"]
    let ending = "a"

    for (let i = 0; i < s.length; i++) {
        console.log(s[i].substring(0,1))
        if (vowels.includes(s[i].substring(0,1).toUpperCase())) {
            console.log(s[i])
            s[i] += "ma" + ending
            console.log(s[i])
        }
        else {
            s[i] = s[i].substring(1, s[i].length) + s[i].substring(0,1) + 'ma' + ending
            console.log(s[i])
        }
        ending += 'a'
        // console.log(toArray[i])
        // for (let j = 0; j < vowels.length; j++) {
        //     console.log(vowels[j])
        //     if (vowels[j] === toArray[i][0].toUpperCase()) {
        //         console.log(toArray[i][0])
        //         let addedma = toArray[i].concat("ma")
        //         console.log(addedma)
        //     }
        //     else {
        //         console.log(toArray[i][0])
        //     }
        // }
    }
    return s.join(" ")

    // for (let i = 0; i < vowels.length; i++) {
    //     if (vowels[i] === toArray[0]) {
    //         let addedma = S.concat("ma")
    //         console.log(addedma)
    //     }
    // }
}

console.log(toGoatLatin("I speak Goat Latin"))