//===============================================================================
//Given a string, you need to reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.
//===============================================================================

// Input: "Let's take LeetCode contest"
// Output: "s'teL ekat edoCteeL tsetnoc"


//Steps
//1. Convert the string to an array, split at the space
//2. Loop through the array, reversing each element using the reverse built-in method
//3. Convert the array back into a string
//4. Return the string at the end of the function

function reverseWords(s) {
    let newArray = s.split(" ")
    let newString = ""
    

    if (s === "") {
        return ""
    }
    for (let i = 0; i < newArray.length; i++) {
        let element = newArray[i]
       for (let j = 0; j < element.length; j++) {
           let elementArray = element.split("")
        
            let reverseElementArray = elementArray.reverse()
            var string = reverseElementArray.join("")
        }
        if (i === 0) {

            newString += string
        }
        else {
            newString += " " + string
        }
        
    }
    return newString
}

//leetcode
// var reverseWords = function(s) {
//     let res = '';
//     let word = '';
//     for (let c of s) {
//         if (c === ' ') {
//             res += word + c;
//             word = '';
//         } else {
//             word = c + word;
//         }
//     }
//     return res + word;
// };

console.log(reverseWords(""))