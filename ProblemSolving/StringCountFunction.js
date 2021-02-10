// ============================================================================================
// Write a function which takes in a string and returns counts of each character in the string.
// ============================================================================================

// Start with Simple Examples
// charCount("aaaa"); // {a:4}
// charCount("hello"); // {h:1, e:1, l:2, o:1}

// // Complex Examples
// "Hello hi" // Do we count spaces? What about uppercase & lowercase of the same character?

// // Empty inputs
// charCount("") // What if the user passes in nothing, or an empty string? Should we return an empty object, or null? etc.

// // Invalid inputs
// charCount(50) // What if the user doesn't pass in a string? What should we return?

// // BREAK IT DOWN!!!

// function charCount(str) {
//     // do something
//     // return an object with keys that are lowercase alphanumeric characters in the string; values should be total count for each character in integer datatype

// }

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

console.log(charCount("Hi there!"))