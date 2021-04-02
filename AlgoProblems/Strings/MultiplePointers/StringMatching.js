//===============================================================================
//Given an array of string words. Return all strings in words which is substring of another word in any order. String words[i] is substring words[j], if can be obtained removing some characters to left and/or right side of words[j]
//===============================================================================

//Constraints
// 1 <= words.length <= 100
// 1 <= words[i].length <= 30
// words[i] contains only lowercase English letters.
// It's guaranteed that words[i] will be unique.


//Steps
//1. Create a newArray
//1. Sort the input array by string length, going from shortest string to longest
//2. Set up a outer for loop that sets i = 0, increment by 1
//3. Set up a inner for loop that sets j = 1, increment by 1
//4. Set up conditional to check to see if words[j].includes(words[i]) -> check syntax
//5. If true, push words[i] into newArray
//6. Return newArray at end of function

function stringMatching(words) {
    let newArray = [];
    let sortedArray = words.sort(function(a,b) { return a.length - b.length })

    console.log(sortedArray)

    for (let i = 0; i < sortedArray.length; i++) {

        for (let j = 1; j < sortedArray.length; j++) {
            console.log("words[i]", words[i], "words[j]", words[j])
            if (words[j].includes(words[i]) && i !== j) {
                newArray.push(words[i]) 
                console.log("newArray", newArray)
            }
        }
    }
    const uniqueArray = [...new Set(newArray)]
    return uniqueArray

}

console.log(stringMatching(["leetcoder", "leetcode", "od", "hamlet", "am"]))