//===============================================================================
//Given a string s, return the "reversed" string where all characters that are not a letter stay in the same place, and all letters reverse their positions
//===============================================================================

//Constraints
// S.length <= 100
// 33 <= S[i].ASCIIcode <= 122 
// S doesn't contain \ or "


//Steps
//1. Create an empty array to store index values
//2. Create an empty array to store the non alphabetical characters
//3. Using ascii, separate out the non alphabetical characters to create a character-only string. Set it to a variable
//4. Loop over the original string. If non alphabetical character, shove the index into the new array
//5. Set up a left & right pointer - reversing the string
//6. Somehow inserting the non characters back into the array in their original indices

function reverseOnlyLetters(S) {
    let indexArray = [];
    let alphabetString = ""
    let nonAlphabetString = ""

    let array = S.split("")
    console.log(array)

    for (const [index, chars] of array.entries()) {
        let value = chars.charCodeAt();
        
        if ((value >= 65 && value <= 90) || (value >= 97 && value <= 122 )) {
            alphabetString += chars
        }
        else if (!(value >= 65 && value <= 90) || (value >= 97 && value <= 122)) {
            nonAlphabetString += chars
            indexArray.push(index)
        }
    }
    
    console.log(alphabetString)
    let alphabetArray = alphabetString.split("")

    let left = 0;
    let right = alphabetArray.length - 1;

    console.log(alphabetArray)
    while (left < right) {
        let temp = alphabetArray[left]
        alphabetArray[left] = alphabetArray[right]
        alphabetArray[right] = temp
        left++
        right--
    }
    
    console.log(alphabetArray)
    let nonAlphabetArray = nonAlphabetString.split("")
    console.log(nonAlphabetArray)
    // console.log(nonAlphabetString)
    console.log(indexArray)
    let k = 0;

    for (let i = 0; i < alphabetArray.length + 1; i++) {
        console.log(alphabetArray[i])
        for (let j = 0; j < indexArray.length; j++) {
            if (indexArray[j] === i) {
                alphabetArray.splice(indexArray[j],0, nonAlphabetArray[k])
                k++
                console.log(k)
                console.log(alphabetArray)
            }
        }
    }

return alphabetArray.join("")
}

console.log(reverseOnlyLetters("7_28]"))