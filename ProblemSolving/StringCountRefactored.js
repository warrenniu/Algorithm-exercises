function charCount(str) {
    // make object to return at end 
    let result = {}
    // loop over string, for each character...
    // if the character is a number/letter AND is a key in object, add one to count
    // if the character is a number/letter AND is not a key in object, add it to the object and set value to 1
    // if character is something else (space, comma, etc.) then do nothing
    for (let i = 0; i < str.length; i++) {
        let char = str[i].toLowerCase()
        if (result[char] > 0) {
            result[char]++
        } else {
            result[char] = 1
        }
    }
    // return object at end
    return result
}

// REFACTORED

function charCount(str) {
    // make object to return at end 
    let result = {}
    // loop over string, for each character...
    // if the character is a number/letter AND is a key in object, add one to count
    // if the character is a number/letter AND is not a key in object, add it to the object and set value to 1
    // if character is something else (space, comma, etc.) then do nothing
    for (var char of str) {
        if (isAlphaNumeric(char)) {
        char = str.toLowerCase()
           // REFACTORED
           result[char] = ++result[char] || 1
        }
    }
    // return object at end
    return result
}

console.log(charCount("Hi hello!"))

// ============================================================================================
// Comparing RegEx vs. Character code At (charCodeAt)
// ============================================================================================

function isAlphaNumeric(char) {

    for (let i = 0; i < str.length; i++) {
        let code = char.charCodeAt(0);
        if (!(code > 47 && code < 58) && //numeric (0-9)
        !(code > 64 && code < 91) && //upper alpha (A-Z)
        !(code > 96 && code < 123)) {
            return false
        }
    }
    return true 
}

// isAlphaNumeric("Hi hello");