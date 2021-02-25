//===============================================================================
//You are given a string representing an attendance record for a student. The record only contains the following three characters: 1. A - absent, 2. L - late, 3. P - present. A student could be rewarded if his attendance record doesn't contain more than one "A" (absent) or more than two continuous 'L' (late). You need to return whether the student could be rewarded according to his attendance record.
//===============================================================================

//Steps
//1. Return a boolean - we're checking for two condtions (More than 1 "A" and more than two continuous "L"). Use the && operator.
//2. Use the split method on the string for "A" and check if the length is less than or equal to 2 
//3. Use the indexOf method on the string and check for "LLL" equals to -1
          //The indexOf() method returns the position of the first occurrence of a specified value in a string.
          //This method returns -1 if the value to search for never occurs.

function checkRecord(str) {
    console.log(str.indexOf('LLL'))
    return str.split('A').length <=2 && str.indexOf('LLL') === -1
}

console.log(checkRecord("PPALLLP"))