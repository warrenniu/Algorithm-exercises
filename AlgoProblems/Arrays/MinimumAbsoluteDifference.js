//===============================================================================
//Given an array of distinct integers arr, find all pairs of elements with the minimum absolute difference of any two elements. Return a list of pairs in ascending order(with respect to pairs), each pair [a,b] follows: a,b from arr, a < b, b-a equals to the minimum absolute difference of any two elements in arr
//===============================================================================

//Constraints
//1. 2 <= arr.length <= 10 ** 5
//2. -10 ** 6 <= arr[i] <= 10 ** 6

//Steps (Multiple Pointers)
//1. Set up two pointers, one at zero index (left) and one at last index (right)
//2. Create a variable called currentDifference and set it to Infinity
//3. Set a while loop, where each iteration compares left and right. if difference is less than currentDifference, then set it equal to currentDfference
//4. 

function minimumAbsDifference(arr) {
    let currentDifference = Infinity;
    let leadPointer = 1
    let trailPointer = 0
    let newArray = []

    arr.sort(function(a,b) {return a - b})
    
    for (let i = 1; i < arr.length; i++) {
        let thisDifference = arr[i] - arr[i-1];

        if (thisDifference < currentDifference) {
            currentDifference = thisDifference
        }
    }
    console.log(currentDifference)
    console.log(arr)
    while (trailPointer <= leadPointer) {
        if (arr[leadPointer] - arr[trailPointer] === currentDifference) {
            newArray.push([arr[trailPointer],arr[leadPointer]])
            leadPointer++
            trailPointer++

        }
        else if (arr[leadPointer] - arr[trailPointer] < currentDifference) {
            leadPointer++
        } 
        else {
            trailPointer++
        }
        
    }
    return newArray
}

console.log(minimumAbsDifference([-12,17,-59,50,10,83,27,-79]))

//1st Iteration
//-10 + 14 = 4
//[[-14,10]]
             //L
//[-14,-10,-4,3,8,19,23,27]
            //Le

//2nd Iteration
//-4 + 10 = 6