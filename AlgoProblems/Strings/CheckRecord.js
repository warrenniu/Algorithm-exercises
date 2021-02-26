//===============================================================================
//You are given a string representing an attendance record for a student. The record only contains the following three characters: 1. A - absent, 2. L - late, 3. P - present. A student could be rewarded if his attendance record doesn't contain more than one "A" (absent) or more than two continuous 'L' (late). You need to return whether the student could be rewarded according to his attendance record.
//===============================================================================

//Steps
//1. Create an empty object to check for the frequency of each string character
//2. Take the string and put it in an object. If the value of "A" is greater than one, return false
//3. Use the three pointer approach (for loop) - check to see if there are 3 consecutive L's. If there are, return false
//4. Return true at the end of the function

function checkRecord(str) {
    let frequencyCounter = {};

    for (let i = 0; i < str.length; i++) {
        frequencyCounter[str[i]] ? frequencyCounter[str[i]] += 1 : frequencyCounter[str[i]] = 1
    }

    if (frequencyCounter["A"] > 1) {
        return false
    }

    for (let i = 0; i < str.length; i++) {
        if (str[i] === "L" && str[i + 1] === "L" && str[i + 2] === "L") {
            return false
        }
    }

    console.log(frequencyCounter)
    return true
}

//Steps
//1. Return a boolean - we're checking for two condtions (More than 1 "A" and more than two continuous "L"). Use the && operator.
//2. Use the split method on the string for "A" and check if the length is less than or equal to 2 
//3. Use the indexOf method on the string and check for "LLL" equals to -1
//The indexOf() method returns the position of the first occurrence of a specified value in a string.
//This method returns -1 if the value to search for never occurs.

//Leetcode using split and indexOf

// function checkRecord(str) {
//     console.log(str.indexOf('LLL'))
//     return str.split('A').length <=2 && str.indexOf('LLL') === -1
// }


//Leetcode using Counters

// function checkRecord2(str){
//     let aCounter = 0;
//     let lCounter = 0;
//     for(let i = 0;i<str.length;i++){
//         if(str[i] === "A"){
//             aCounter++
//         } else if (str[i] === "L"){
//             lCounter++
//         }
//         else{
//                lCounter = 0
//         }

//     }

//     if(aCounter >= 2 || lCounter > 2){
//         return false
//     }

//     return true
// }

//===============================================================================
//You are given a string representing an attendance record for a student. The record only contains the following three characters: 1. A - absent, 2. L - late, 3. P - present. A student could be rewarded if his attendance record doesn't contain more than one "A" (absent) or more than two continuous 'L' (late). You need to return whether the student could be rewarded according to his attendance record.
//===============================================================================







console.log(checkRecord("PALL"))
