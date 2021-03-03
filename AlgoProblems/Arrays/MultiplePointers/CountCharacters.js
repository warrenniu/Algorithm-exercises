//===============================================================================
//You are given an array of strings words and a string chars. A string is good if it can be formed by characters from chars (each character can only be used once). Return the sum of lengths of all good strings in words.
//===============================================================================

//Constraints
//1. 1 <= words.length <= 1000
//2. 1 <= words[i].length. chars.length <= 100
//3. All strings contain lowercase English letters only

//Steps
//1. Create a sum variable and set it to 0
//2. Create a for loop that iteraters through the array of strings
//3. Set a inner pointer that loops through each string element within the array, checking it against the pointer set in chars
//4. We need to splice the index of the string in chars if there is a match
//5. Reset chars back to original string after each iteration of the first for loop
//6. If element is fully iterated, take the element.length and add it to sum variable
//7. Return sum at end of the function

// function countCharacters(words, chars) {
//     let sum = 0;

//     for (let i = 0; i < words.length; i++) {
//         let string = chars;
//         let element = words[i];
//         for (let j = 0; j < element.length; j++) {

//             for (let k = 0; k < string.length; k++) {
//                 if (string[k] === element[j]) {
//                     string = string.split('')
//                     string.splice(string[k],1)
//                     string = string.join('')
//                     console.log(string)
//                     string = string.slice(0,k) + string.slice(k+1)
//                     sum += element.length
//                 }
                
//             }
//             console.log(element)
//             if (element[j] === string[innerPointer]) {
//                 string = string.slice(0, innerPointer) + string.slice(innerPointer + 1)
//                 sum += element.length
//                 console.log(string)
//                 console.log(sum)
                
//             }
//             else {
//                 innerPointer++
//             }
//         }
//     } 
//     return sum
// }

function countCharacters(words, chars) {
    let sum = 0;

    function makeHash(word) {
        let hash = {};
        for (let i = 0; i < word.length; i++) {
            hash[word[i]] ? hash[word[i]] += 1 : hash[word[i]] = 1
        }
        return hash
    }
    let hash = makeHash(chars)
    console.log(hash)

    for (let i = 0; i < words.length; i++) {
        let bool = true;
        let temp = makeHash(words[i]);

        for (let key in temp) {
            if (!hash[key] || hash[key] < temp[key]) {
                bool = false
            }
        }
        bool && (sum += words[i].length)
    }
    return sum
}

console.log(countCharacters(["cat", "bt", "hat", "tree"], "atach"))