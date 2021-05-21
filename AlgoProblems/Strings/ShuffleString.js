//===============================================================================
//Given a string s and an integer array indices of the same length.
// The string s will be shuffled such that the character at the ith position moves to indices[i] in the shuffled string.
// Return the shuffled string.
//===============================================================================

// Input: s = "codeleet", indices = [4,5,6,7,0,2,1,3]
// Output: "leetcode"
// Explanation: As shown, "codeleet" becomes "leetcode" after shuffling.


//Steps
//1. Create an empty string called shuffledString
//2. Create a object that sets up key value pair for s[i] & their corresponding value in indices

function restoreString(s, indices) {
    let hashMap = {}
    let newString = ''
    
    for (let i = 0; i<indices.length; i++){
        hashMap[indices[i]] = s.charAt(i)
    }

    console.log(hashMap)

    for(var key in hashMap){
        // newString.concat(hashMap[key])
        newString += hashMap[key]
    }
    console.log(newString)

//leetcode
    // let whatever = indices.map((e,i) =>({l:s[i],i:e}))
    // console.log(whatever)
}

console.log(restoreString("codeleet", [4,5,6,7,0,2,1,3]))