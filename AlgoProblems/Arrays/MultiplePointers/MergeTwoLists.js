//===============================================================================
//Merge two sorted linked lists and return it as a sorted list. The list should be made by splicing together the nodes of the first two lists.
//===============================================================================

//Constraints
// The number of nodes in both lists is in the range [0, 50].
// -100 <= Node.val <= 100
// Both l1 and l2 are sorted in non-decreasing order.

//Steps
//1. Set up newArray
//2. i = 0, left = 0, right = 0
//3. Set up two pointers. One at the first index of first array - other at the first index of the second array
//4. Set up a while loop. While i is less than arr1.length OR i is less than arr2.length
//5. If statement - if arr1[left] less than arr2[right], push arr1[left] & left++
//6. Else if - if arr1[left] is greater than arr2[right], push arr2[right] & right++
//7. Return newArray

function mergeTwoLists(arr1, arr2) {
    let newArray = [];
    let i = 0;
    let left = 0;
    let right = 0;
    let total = arr1.length + arr2.length
    console.log(total)
    

   for (let i = 0; i < total ; i++) {
        if (arr1[left] <= arr2[right] || arr2[right] === undefined ) {
            newArray.push(arr1[left])
            left += 1
            // console.log(newArray)
            
        }
        else if (arr1[left] > arr2[right] || arr1[left] === undefined) {
            newArray.push(arr2[right])
            right += 1
            // console.log(newArray)
            
        }
    }
    return newArray
}

console.log(mergeTwoLists([],[0]))