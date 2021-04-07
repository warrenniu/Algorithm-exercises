//===============================================================================
//Given an array A of strings made only from lowercase letters, return a list of all characters that show up in all strings within the list (including duplicates).  For example, if a character occurs 3 times in all strings but not 4 times, you need to include that character three times in the final answer.
//You may return the answer in any order.
//===============================================================================

//Constraints
// 1 <= A.length <= 100
// 1 <= A[i].length <= 100
// A[i][j] is a lowercase letter

//Steps
//1. 

function commonChars(A) {
    //store freqCounter of each char
    let hashmap = {}
    let first = A[0]

    //set freqCounter for the first string element
    for (let char of first) {
        hashmap[char] ? hashmap[char] += 1 : hashmap[char] = 1
    }
    console.log(hashmap)

    //starting loop at 2nd element
    for (let i = 1; i < A.length; i++) {
        let word = A[i]
        //creating a temp object to compare 
        let temp = {}

        //looping through all words starting from 2nd one
        for (let char of word) {
            console.log(char)
            //if first element has character -> if true
            if (hashmap[char]) {
            console.log(hashmap[char])

            hashmap[char] -= 1
            temp[char] ? temp[char]+=1 : temp[char] = 1

            }
        }
        hashmap = temp
        console.log(hashmap)
    }
    let result = []
    //loop through the object. subtract value by 1 each time its key gets pushed in 
    for (let [key, value] of Object.entries(hashmap)) {
        while (value) {
            result.push(key)
            value--
        }
    }
return result

}

console.log(commonChars(["bella", "hello", "yellow"]))