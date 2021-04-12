//=========================================================
//Given a sentence that consists of some words separated by a single space, and a searchWord.
// You have to check if searchWord is a prefix of any word in sentence.
// Return the index of the word in sentence where searchWord is a prefix of this word (1-indexed).
// If searchWord is a prefix of more than one word, return the index of the first word (minimum index). If there is no such word return -1.
// A prefix of a string S is any leading contiguous substring of S.
//=========================================================

//Constraints
// 1 <= sentence.length <= 100
// 1 <= searchWord.length <= 10
// sentence consists of lowercase English letters and spaces.
// searchWord consists of lowercase English letters.

//Steps
//1. Convert the sentence spring input into an array, split at space. Set that to a variable
//2. Set pointer 

function isPrefixOfWord(sentence, searchWord) {
    let sentenceArray = sentence.split(" ")
    console.log(sentenceArray)
    console.log(searchWord)


    for (let i = 0; i < sentenceArray.length; i++) {
        if (sentenceArray[i].startsWith(searchWord)) {
            return i + 1
        }
    }
    return -1

    // for (let i = 0; i < sentenceArray.length; i++) {
    //     let k = 0
    //     console.log("iterating sentenceArray", sentenceArray[i])
    //     for (let j = 0; j < sentenceArray[i].length; j++) {
    //         console.log("iterating word", sentenceArray[i][j])
            
    //         if (sentenceArray[i][j] === searchWord[k]) {
    //             console.log("each letter",sentenceArray[i][j], "first letter of search",searchWord[0])
    //             sentenceArray.splice(i,1)
    //             k++
    //         }
    //         newArray.push(sentenceArray[i])

    //     }
    // }
    // console.log(sentenceArray)
    // console.log(newArray)

    // if (newArray.length === 0) {
    //     return -1
    // }
    // else {
    //     for (let i = 0; i < )
    // }
}

console.log(isPrefixOfWord("this problem is an easy problem", "pro"))