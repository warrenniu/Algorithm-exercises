//===============================================================================
// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
// An input string is valid if:
// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
//===============================================================================

//Constraints
// 1 <= words.length <= 100
// 1 <= words[i].length <= 30
// words[i] contains only lowercase English letters.
// It's guaranteed that words[i] will be unique.


//Steps
// We'll need to create our stack to hold our open parentheses'. This will start off as an empty array.
// Set up our for loop, which will iterate through our input string
// During each iteration, if our current element is an open parentheses ( '(' or '{' or '[' ), let's push that element into the top of our stack
// During each iteration, if our current element is a closing bracket (')' or '}' or ']'), let's pop off the last opening parentheses element from the stack ONLY if it matches with the encountered closing bracket 
// Remember, order matters here. If the closing bracket that we encounter does not match with the opening bracket placed on top of the stack, we then immediately break out of the loop and return false because the parentheses in the string are not balanced.
// If the stack is empty after we've finished our iteration, we can conclude that our string contains a balanced parentheses and we can return true

function validParentheses(str) {
    let stackArray = [];

    for (let i = 0; i < str.length; i++) {
        let lastOpen = stackArray[stackArray.length - 1]

        if (str[i] === "(" || str[i] === "[" || str[i] === "{") {
            stackArray.push(str[i])
        }
        else if ((str[i] === ")" && lastOpen === "(") || (str[i] === "]" && lastOpen === "[") || (str[i] === "}" && lastOpen === "{")) {
            stackArray.pop()
        }
        else {
            return false
        }
    }
    return stackArray.length > 0 ? false : true
}


console.log(validParentheses("()"))