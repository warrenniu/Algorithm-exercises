//===============================================================================
// Given a non-negative integer num, return the number of steps to reduce it to zero. If the current number is even, you have to divide it by 2, otherwise, you have to subtract 1 from it.
//===============================================================================

//Constraints
// 0 <= num <= 10^6


// Input: num = 14
// Output: 6
// Explanation: 
// Step 1) 14 is even; divide by 2 and obtain 7. 
// Step 2) 7 is odd; subtract 1 and obtain 6.
// Step 3) 6 is even; divide by 2 and obtain 3. 
// Step 4) 3 is odd; subtract 1 and obtain 2. 
// Step 5) 2 is even; divide by 2 and obtain 1. 
// Step 6) 1 is odd; subtract 1 and obtain 0.


//Steps
//1. Create a variable called count and set it to 0
//2. Use a while loop (num !== 0)
//3. If num is even, diving it by 2. Increase count by 1
//4. If num is odd, subtract it by 1. Increse count by 1
//5. Return count at end of function

function numberOfSteps(num) {
    let count = 0;

    while (num !== 0) {
        
        if (num % 2 === 0) {
            num = num / 2;
            
        }
        else {
            num = num - 1;
        }
        count += 1
    }
return count
}

console.log(numberOfSteps(123))