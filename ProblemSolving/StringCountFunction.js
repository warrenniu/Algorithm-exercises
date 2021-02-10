// ============================================================================================
// Write a function which takes in a string and returns counts of each character in the string.
// ============================================================================================

// Start with Simple Examples
charCount("aaaa"); // {a:4}
charCount("hello"); // {h:1, e:1, l:2, o:1}

// Complex Examples
"Hello hi" // Do we count spaces? What about uppercase & lowercase of the same character?

// Empty inputs
charCount("") // What if the user passes in nothing, or an empty string? Should we return an empty object, or null? etc.

// Invalid inputs
charCount(50) // What if the user doesn't pass in a string? What should we return?