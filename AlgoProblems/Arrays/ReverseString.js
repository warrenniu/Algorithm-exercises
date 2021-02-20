//===============================================================================
//Write a function that reverses a string. The input string is given as an array of characters char[]. Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory. You may assume all the characters consist of printable ascii characters
//===============================================================================

//Constraints
//1. O(1) space complexity

//Steps (Multiple Pointers)
//1. Set left pointer to 0; right pointer to last index
//2. With each iteration, set left pointer to right pointer
//3. return s at end of function

// function reverseString(s) {

//     let reverseArray = s.reverse()
//     return reverseArray
// }

//Two Pointers approach
function reverseString(s) {
    let left = 0;
    let right = s.length - 1;

    while (left < right) {
        let temp = s[left]
        s[left] = s[right]
        s[right] = temp 
        left++
        right--
    }
    return s
}




console.log(reverseString(["h", "e", "l", "l", "o"]))