//===============================================================================
//Given a list of integers nums and an integer k, return the maximum possible i where nums[0] + nums[1].... + nums[i] <= k. Return -1 if no valid i exists.
//===============================================================================

function kPrefix(arr,num) {
    let count = 0;
    let ind = -1;

    for (let i = 0; i < arr.length; i++) {
        count += arr[i]
        if (count <= num) ind = i 
    }

    return ind
}

console.log(kPrefix([3,-5,4,1,6],4))