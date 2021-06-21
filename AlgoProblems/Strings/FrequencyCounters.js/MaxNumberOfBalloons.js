//===============================================================================
//Given a string text, you want to use the characters of text to form as many instances of the word "balloon" as possible.
//You can use each character in text at most once. Return the maximum number of instances that can be formed.
//===============================================================================

//Constraints
// 1 <= text.length <= 104
// text consists of lower case English letters only.


//Steps
//1. Initialize a empty hash that will store the frequency count of each letter. Call it freqCounter
//2. Loop over the input string and populate the freqCounter hash
//3. 

function maxNumberOfBalloons(text) {
    // let freqCounter = {};

    // for (let i = 0; i < text.length; i++) {
    //     freqCounter[text[i]] = freqCounter[text[i]] ? freqCounter[text[i]] += 1 : freqCounter[text[i]] = 1
    // };
    const freqCounter = [...text].reduce((A, char) => {
        console.log("A", A)
        console.log("char", char)
        A[char] = (A[char] || 0) + 1;
        return A;
    }, {});

    console.log(freqCounter)

    return Math.floor(Math.min(freqCounter['b'], freqCounter['a'], freqCounter['l'] / 2, freqCounter['o'] / 2, freqCounter['n'])) || 0;


}

console.log(maxNumberOfBalloons("leetcode")) //output should be 1