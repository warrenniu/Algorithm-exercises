//===============================================================================
//Given a string s of lower and upper case English letters.
// A good string is a string which doesn't have two adjacent characters s[i] and s[i + 1] where:
// 0 <= i <= s.length - 2
// s[i] is a lower-case letter and s[i + 1] is the same letter but in upper-case or vice-versa.
// To make the string good, you can choose two adjacent characters that make the string bad and remove them. You can keep doing this until the string becomes good.
// Return the string after making it good. The answer is guaranteed to be unique under the given constraints.
// Notice that an empty string is also good.
//===============================================================================

//Constraints
// 1 <= s.length <= 100
// s contains only lower and upper case English letters.

//Steps
//2. Loop through the input string, setting i to equal to 0.
//3. Set conditional, if value of s[i] is equal to s[i+1] (uppercase), then splice both values
//4. return s at end of function

function makeGood(s) {
    let stack = ['']

    for (let char of s) {
        let top = stack[stack.length - 1]
        if (top.toLowerCase() === char.toLowerCase() && top !== char) {
            stack.pop()
            console.log("popped stack", stack)
        }
        else {
            stack.push(char)
            console.log("pushed stack", stack)
        }
    }
    return stack.join('')


    // let array = s.split('')
    // console.log(array)
    // console.log(array[0])
    
    // for (let i = 0; i < s.length; i++) {
    //     console.log(array[i])
    //     if (array[i].toLowerCase() === array[i+1].toLowerCase() && array[i] !== array[i+1]) {
    //         array.splice(i,1)
    //         array.splice(i+1,1)
    //     }

    // }
// return array
}

console.log(makeGood("leEeetcode"))