//===============================================================================
//Write a function called minSubArrayLen which accepts two parameters - an array of positive integers and a positive integer. This function should return the minimal length of a contiguous subarray of which the sum is greater than or equal to the integer passed to the function. If there isn't one, return 0 instead.
//===============================================================================

//Constraints
//1. Time Complexity - O(N)
//2. Space Complexity - O(1)

//Steps
//1. Create a currentSum variable that will hold the current total of the sum
//2. Set the frames (multiple pointers) of the window, creating a variable called leading & trailing
//3. Create a variable to store the minLen that satisfies the problem. Set initial value to Infinity so it'll be changed with first iteration
//4. Create a while loop where the conditional is set as leading < nums.length
//5. Set a conditional - if current window doesn't add up to given sum then move window to the right
//6. Set a conditional - if current window adds up to the given sum then shrink the window (move end up)
//7. Else statement - if our current total is less than the given sum but we've reached the end of the loop, set a break
//8 Return ternary at end - if minLen is Infinity, return 0. Else, return minLen

function minSubArrayLen(arr, num) {
    let currentSum = 0;
    let leading = 0;
    let trailing = 0;
    let minLen = Infinity 

    while (trailing < arr.length) {
        if (currentSum < num && leading < arr.length) {
            currentSum += arr[leading]
            leading++
        }
        else if (currentSum >= num) {
            minLen = Math.min(minLen, leading - trailing)
            currentSum -= arr[trailing]
            trailing++
        }
        else {
            break
        }
    }
    return minLen === Infinity ? 0 : minLen
}


console.log(minSubArrayLen([2,3,1,2,4,3],7))
