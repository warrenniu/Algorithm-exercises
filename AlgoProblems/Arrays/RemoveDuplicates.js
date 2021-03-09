//===============================================================================
//Given a string s of lowercase letters, a duplicate removal consists of choosing two adjacent and equal letters, and removing them. We repeatedly make duplicate removals on S until we no longer can. Return the final string after all such duplicate removals have been made. It is guaranteed the answer is unique.
//===============================================================================

//Example Testcase
// Input: "abbaca"
// Output: "ca"
// Explanation: 
// For example, in "abbaca" we could remove "bb" since the letters are adjacent and equal, and this is the only possible move.  The result of this move is that the string is "aaca", of which only "aa" is possible, so the final string is "ca".

//Constraints
// 1 <= S.length <= 20000
// S consists only of English lowercase letters.

//Steps
//1. Use a for loop, iterate over the string
//2. Create a conditional. If arr[i] === arr[i+1] then remove those elements. Reset i to 0
//3. return string

// function removeDuplicates(S) {
//     let i = 0;
//     let newString = "";
//     let newString1 = "";
    
    
    
//     while (i < S.length) {
//         // let newString = ""
//         // let newString1 = ""
//         if (S[i] === S[i+1]) {
//             newString = S.replace(S[i],"") 
//             newString1 = newString.replace(S[i+1],"")
//             console.log(newString)
//             console.log(newString1)
//             S = newString1
//             newString = S  
//             newString1 = S 
//              i = 0
//         }
//         else {
//             i++
//         }
//     }
//     return S
// }

//leetcode
var removeDuplicates = function(S) {
    let res = [];
    for(let i=0; i<S.length; i++){
        if(S[i] !== res[res.length-1]) {
            res.push(S[i]);
        } else {
            res.pop();
        }
    }
    return res.join("");
};


console.log(removeDuplicates("aababaab"))

