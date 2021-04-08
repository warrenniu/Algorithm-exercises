//===============================================================================
//Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must be unique and you may return the result in any order.
//===============================================================================

//Constraints
// 1 <= nums1.length, nums2.length <= 1000
// 0 <= nums1[i], nums2[i] <= 1000

//Steps to take
//1. Set up two empty objects to count the frequency counter of elements in both nums1 & nums2
//2. Create an empty array to store the intersecting numbers
//2. Set up for loop to iterate over both arrays, instantiating them into their objects
//3. Set up a for in loop, if the key appears in both arrays, push the key into the empty array
//5. Return the newArray at end of function

function intersection(nums1,nums2) {
    let freqCounter1 = {};
    let freqCounter2 = {};
    let newArray = [];

    nums1.forEach(num => {
        freqCounter1[num] ? freqCounter1[num] += 1 : freqCounter1[num] = 1
    })

    nums2.forEach(num => {
        freqCounter2[num] ? freqCounter2[num] += 1 : freqCounter2[num] = 1
    })

    console.log(freqCounter1)
    console.log(freqCounter2)

    for (key in freqCounter1) {
        if (key in freqCounter2) {
            newArray.push(parseInt(key))
        }
    }

    for (key in freqCounter2) {
        if (key in freqCounter1) {
            newArray.push(parseInt(key))
        }
    }
let uniqueArray = [...new Set(newArray)]
return uniqueArray
}

console.log(intersection([4,9,5], [9,4,9,8,4]))