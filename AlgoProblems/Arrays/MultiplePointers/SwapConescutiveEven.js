// class Solution {
//     solve(nums) {
//         // set up 2 pointers
//         // loop through
//         // when both point to an even number, swap
//         // move both up
//         // return nums

//         let first = 0
//         let second = 1

//        while (second < nums.length){
//             if (nums[first] % 2 === 0 && nums[second] % 2 === 0  && first !== second){
//                 [nums[first], nums[second]] = [nums[second], nums[first]]
//                 first = second + 1
//                 second += 2
//             } else if (nums[first] % 2 === 0) {
//                 second++
//             } else if (nums[second] % 2 === 0) {
//                 first++
//             } else if (nums[first] % 2 !== 0 && nums[second] % 2 !== 0){
//                 first = second + 1
//                 second += 2 
//             } else if (first === second) {
//                 second++
//             }
//         }
//         return nums
//     }
// }

//set a left pointer at 0
//set a right pointer at 1
//set a while loop where left is less than right
//set conditional if both are even, move pointers & if both pointers are not on the same index
//set conditional if left pointer value is even
//set conditional if right pointer value is even


function swapConsecutiveEvens(nums) {
    let leftPointer = 0;
    let rightPointer = 1;

    while (rightPointer < nums.length) {
        if (nums[leftPointer] % 2 === 0 && nums[rightPointer] % 2 === 0 && leftPointer !== rightPointer) {
            let temp = nums[leftPointer];
            nums[leftPointer] = nums[rightPointer]
            nums[rightPointer] = temp
            leftPointer = rightPointer + 1
            rightPointer += 2
        }
        else if (nums[leftPointer] % 2 === 0) {
            rightPointer++
        }
        else if (nums[rightPointer] % 2 === 0) {
            leftPointer++
        }
        else if (leftPointer === rightPointer) {
            rightPointer++
        }
        else if (nums[leftPointer] % 2 !== 0 && nums[rightPointer] % 2 !== 0) {
            leftPointer = rightPointer + 1
            rightPointer += 2
        }
    }
    return nums
}

console.log(swapConsecutiveEvens([5,3,4,6,8,10]))