//===============================================================================
//
//===============================================================================

//Constraints
//1. 

//Steps
//1. Create a Map to access frequency of each number
//2. Create a while loop - keep looping until a key has a value of 2
//3. Inside loop, convert num to a string
//4. Create a nested loop that sets our key value pairs
//5. Return the # of keys. Add 1 as it'll always be one plus 

function strangeSequence(num) {

    let results = new Map()
    let currentNumber = num
    let addedNumber = 0

    while (results[currentNumber] !== 2) {
        let tempArray = currentNumber.toString().split('')
        for (let i = 0; i < tempArray.length; i++) {
            
            addedNumber += (tempArray[i] * tempArray[i])
        }
        currentNumber = addedNumber;
        addedNumber = 0;
        results[currentNumber] ? results[currentNumber] += 1 : results[currentNumber] = 1;

    }

    return Object.keys(results).length + 1;
}

//Time Complexity: O(N^2)
//Space Complexity: O(N)

console.log(strangeSequence(16))