//===============================================================================
//Given a list of integers nums, return the number of elements x there are such that x + 1 exists as well
//===============================================================================

// Constraints
// n ≤ 100,000 where n is the length of nums

//steps
//1. Create an empty object - store frequency counter
//2. Create a variable called count. Set it to 0
//2. Store elements as a key value pair. Set a for loop
//3. Set another for loop - Set condition - check if key + 1 exists in the freqCounter object. If yes, increase count by one
//4. Return count at end of function



function countNextElement(arr) {
    let frequencyCounter = {};
    let count = 0;

    for (let i = 0; i < arr.length; i++) {
        frequencyCounter[arr[i]] = frequencyCounter[arr[i]] ? frequencyCounter[arr[i]] += 1 : frequencyCounter[arr[i]] = 1
    }

    for (key in frequencyCounter) {
        for (let i = 0; i < arr.length; i++) {
            if (parseInt(key) === arr[i] + 1) {
                count++
                
            }
        }
    }

    return count

}

console.log(countNextElement([3,1,2,2,7]))