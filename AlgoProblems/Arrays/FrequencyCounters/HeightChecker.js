//===============================================================================
//Students are asked to stand in non-decreasing order of heights for an annual photo. Return the minimum number of students that must move in order for all students to be standing in non-decreasing order of height. Notice that when a group of students is selected they can reorder in any possible way between themselves and the non selected students remain on their seats. 
//===============================================================================

//Constraints
//1 <= heights.length <= 100
//1 <= heights[i] <= 100

// EXAMPLE
// Input: heights = [1,1,4,2,1,3]
// Output: 3
// Explanation: 
// Current array : [1,1,4,2,1,3]
// Target array  : [1,1,1,2,3,4]
// On index 2 (0-based) we have 4 vs 1 so we have to move this student.
// On index 4 (0-based) we have 1 vs 3 so we have to move this student.
// On index 5 (0-based) we have 3 vs 4 so we have to move this student.

//[1,1,4,2,1,3]
//[1,1,1,2,4,3] //2
//[1,1,1,2,3,4] //3

//Steps
//1. Convert variable number of arguments to an array
//2. Create an empty object to store values of array
//3. Loop through array - initialize key to one if not present. Add one to value of key if present
//4. if value of key is greater than one, return true. 
//5. return false at end of function