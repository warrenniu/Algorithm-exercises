//===============================================================================
//Write a function called averagePair. Given a sorted array of integers and a target average, determine if there is a pair of values in the array where the average of the pair equals the target average. There may be more than one pair that matches the average target.
//===============================================================================

//Constraints
//1. Time: O(N)
//2. Space: O(1)

//Steps
//1. Set two pointers (left and right, where left is index of 0 and right is arr.length - 1)
//2. Iterate over the array, compare index of left & right and get the average. If average is equal to target average, return true
//3. Return false at end of function

function averagePair(arr, N) {
    let left = 0;
    let right = arr.length - 1

    while (left < right) {
        if (arr[left] + arr[right] / 2 === N) {
            return true
        }
        else if (arr[left] + arr[right] > N) {
            right--
        }
        else if (arr[left] + arr[right] < N) {
            left++
        }
    }
    return false
}

console.log(averagePair([1,3,3,5,6,7,10,12,19], 8)) 