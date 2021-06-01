//===============================================================================
//Given a string s and an integer array indices of the same length.
// The string s will be shuffled such that the character at the ith position moves to indices[i] in the shuffled string.
// Return the shuffled string.
//===============================================================================

// Input: s = "codeleet", indices = [4,5,6,7,0,2,1,3]
// Output: "leetcode"
// Explanation: As shown, "codeleet" becomes "leetcode" after shuffling.


//Steps
// Instantiate a empty hash that will store our indexes & their corresponding character
// Instantiate a new string where we will construct our newly organized string in their shuffled order
// Set up a for loop that will iterate the length of our indices array, filling out our hash map with our key value pairs
// Set up a second for loop that will construct our string by looking up the key value pairs in our hash map
// Return our newly constructed string at the end of our function

function restoreString(s, indices) {
    let hashMap = {};
    let newString = "";

    for (let i = 0; i<indices.length; i++){
        hashMap[indices[i]] = s.charAt(i);
    }
    console.log(hashMap)

    for(var key in hashMap){
        newString += hashMap[key]
    }

    console.log(newString)
    return newString;

}






// function restoreString(s, indices) {
//     let hashMap = {}
//     let newString = ''
    
//     for (let i = 0; i<indices.length; i++){
//         hashMap[indices[i]] = s.charAt(i)
//     }

//     console.log(hashMap)

//     for(var key in hashMap){
//         // newString.concat(hashMap[key])
//         newString += hashMap[key]
//     }
//     console.log(newString)

// //leetcode
//     // let whatever = indices.map((e,i) =>({l:s[i],i:e}))
//     // console.log(whatever)
// }

console.log(restoreString("codeleet", [4,5,6,7,0,2,1,3]))