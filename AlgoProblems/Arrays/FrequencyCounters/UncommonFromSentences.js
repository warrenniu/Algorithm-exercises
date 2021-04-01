//===============================================================================
//We are given two sentences A and B. (A sentence is a string of space separated words. Each word consists of only lowercase letters). A word is uncommon if it appears exactly once in one of the sentences, and does not appear in the other sentence. Return a list of all uncommon words. You may return the list in any order.
//===============================================================================

//Constraints
// 0 <= A.length <= 200
// 0 <= B.length <= 200
// A and B both contain only spaces and lowercase letters.


//Steps
//1. Create an empty array to store uncommon words
//1. Create two empty objects to store key value pairs of freqCounter for A & B
//2. Convert both strings into an array, split at space so each word is its own element
//3. Set up for loop to initiate freqCounter for both A & B
//4. If value is === 1 && key does not exist in other object, then push key into new array
//5. Return newArray at end of function

function uncommonFromSentences(A,B) {
    let newArray = [];
    let freqCounter1 = {};
    let freqCounter2 = {};

    let firstArray = A.split(" ")
    let secondArray = B.split(" ")

    for (let i = 0; i < firstArray.length; i++) {
        freqCounter1[firstArray[i]] = freqCounter1[firstArray[i]] ? freqCounter1[firstArray[i]] += 1 : freqCounter1[firstArray[i]] = 1
    }

    for (let i = 0; i < secondArray.length; i++) {
        freqCounter2[secondArray[i]] = freqCounter2[secondArray[i]] ? freqCounter2[secondArray[i]] += 1 : freqCounter2[secondArray[i]] = 1
    }
  
    for (key in freqCounter1) {
        if (!(key in freqCounter2) && freqCounter1[key] === 1) {
            newArray.push(key)
        }
    }

    for (key in freqCounter2) {
        if (!(key in freqCounter1) && freqCounter2[key] === 1) {
            newArray.push(key)
        }
    }
return newArray
}

console.log(uncommonFromSentences("apple apple", "banana"))