//===============================================================================
//Given an array of integers where 1 < a[i] ≤ n (n = size of array), some elements appear twice and others appear once. Find all the elements of [1, n] inclusive that do not appear in this array.
//===============================================================================

//Constraints
//1. O(N), no extra space (we can assume the returned list does not count as extra space)

//Steps
//1. i = 1 set[i]. 

function findD(arr){

    // const arrSet = new Set(arr);
    // console.log(arrSet)
    let newArr = [];

    arr.sort(function(a,b) {

    return (a-b)
    })
    console.log(arr)

    for (let i = 1; i <= arr.length; i++) {
        if (!arr.includes(i)) {
            newArr.push(i);
        }
    }

    // for (let i = 0; i < arr.length; i++) {

    // }

    // for(let i = 1;i<arr.length;i++){
    //     console.log(arr[i])
    //     if(!arrSet.has(i)) newArr.push(i)
    // }
    // for (let i = 0; i < arr.length; i++) {
    //     if (!arrSet.has(arr[i])) newArr.push(arr[i])
    // }
    return newArr

}

console.log(findD([1,1]))

//1. Use .max on arr to get max value in the array == 8 (var)
//2. Iterate over arr. If var - arr[i]


