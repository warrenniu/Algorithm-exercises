// function reverseString(s) {

//     let reverseArray = s.reverse()
//     return reverseArray
// }

//===============================================================================
//Write a function that reverses a string. The input string is given as an array of characters char[]. Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory. You may assume all the characters consist of printable ascii characters
//===============================================================================

//Constraints
//1. O(1) space complexity

//Steps
//1. Set up the two pointers - one at index 0 and one at the last index
//2. Use a while loop - set condition to left (0 index) < right (last index)
//3. With each iteration, we'll be moving the left pointer up one and right pointer down one
//4. Create a temp variable that stores the value of the left pointer
//5. Set the value of the left pointer to the right pointer
//6. Set the valuee of the right pointer to the temp variable
//7. At the end of the function, return the array

function reverseString(arr) {
    let left = 0;
    let right = arr.length - 1;
    console.log(left)
    console.log(right)

    while (left < right) {
        console.log("in while loop")
        let temp = arr[left]
        arr[left] = arr[right]
        arr[right] = temp
        left++
        right--
    }
    return arr
}



console.log(reverseString(["h", "e", "l", "l", "o"]))