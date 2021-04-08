//===============================================================================
//Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must appear as many times as it shows in both arrays and you may return the result in any order.
//===============================================================================

//Constraints
// 1 <= nums1.length, nums2.length <= 1000
// 0 <= nums1[i], nums2[i] <= 1000

//Steps to take
//1. Create a new array -> empty array to store intersecting integers
//2. Sort both arrays (nums1 & nums2) in ascending order
//3. Set a conditional -> if nums1.length is shorter -> set a outer for loop to iterate over nums1 & a inner loop to iterate over nums2
//4. Iterate over nums2. If nums2[j] === nums1[i], push nums2[j] into empty array. Splice nums2[j] fromm nums2 array
//5. Vice versa if nums2.length is shorter
//6. Return new array at end of function

function intersect(nums1, nums2) {
    
    let sortedNums1 = nums1.sort(function(a,b) {return a-b})
    let sortedNums2 = nums2.sort(function(a,b) {return a-b})

    // if (sortedNums1.length <= sortedNums2.length) {
    //     for (let i = 0; i < sortedNums1.length; i++) {
    //         console.log(sortedNums1[i])

    //         for (let j = 0; j < sortedNums2.length; j++) {
    //             console.log("nums1", sortedNums1[i], "nums2", sortedNums2[j])
    //             if (sortedNums2[j] === sortedNums1[i]) {
    //                 newArray.push(sortedNums2[j])
    //                 console.log("newArray", newArray)
    //                 sortedNums2.splice(j, 1)
    //                 console.log("mutated array", sortedNums2)
    //                 break
    //             }
                
    //         }

    //     }
    // }
    // else if (sortedNums1.length > sortedNums2.length) {
    //     for (let i = 0; i < sortedNums2.length; i++) {
    //         console.log(sortedNums1[i])

    //         for (let j = 0; j < sortedNums1.length; j++) {
    //             console.log("sortedNums1", sortedNums1[i], "sortedNums2", sortedNums2[j])
    //             if (sortedNums1[j] === sortedNums2[i]) {
    //                 newArray.push(sortedNums1[j])
    //                 console.log("newArray", newArray)
    //                 sortedNums1.splice(j, 1)
    //                 console.log("mutated array", sortedNums2)
    //                 break
    //             }
                
    //         }

    //     }
    // }

    //leetcode
    let hash = {};
    let newArray = [];

    nums2.forEach(num => {
        hash[num] ? hash[num]++ : hash[num] = 1 
    })
    console.log(hash)
    
    for (let i = 0; i < nums1.length; i++) {
        console.log(nums1[i])
        console.log(hash[nums1[i]])
        
        if (hash[nums1[i]] > 0) {
            newArray.push(nums1[i])
            hash[nums1[i]]--
        }
    }
    return newArray

}

console.log(intersect([4,9,5,4,4], [9,4,9,8,4]))
