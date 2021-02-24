//===============================================================================
//Implement a function called, areThereDuplicates, which accepts a variable number of arguments, and checks whether there are any duplicates among the arguments passed in. You can solve this using the frequency counter pattern OR the multiple pointers pattern
//===============================================================================

//Constraints
//1. Time O(N), Space O(N)

//Steps
//1. Convert variable number of arguments to an array
//2. Create an empty object to store values of array
//3. Loop through array - initialize key to one if not present. Add one to value of key if present
//4. if value of key is greater than one, return true. 
//5. return false at end of function

function areThereDuplicates(N) {
    let frequencyCounter = {}
    arguments = Array.prototype.slice.call(arguments)
    
    for (val of arguments) {
        frequencyCounter[val] ? frequencyCounter[val] +=1 : frequencyCounter[val] = 1
    }

    for (key in frequencyCounter) {
        if (frequencyCounter[key] === 2) {
            return true
        }
    }
    return false
}

console.log(areThereDuplicates("a", "a"))