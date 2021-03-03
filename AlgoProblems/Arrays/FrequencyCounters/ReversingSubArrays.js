//===============================================================================
//Given two integer arrays of equal length target and arr. In one step, you can select any non-empty sub-array of arr and reverse it. You are allowed to make any number of steps. Return true if you can make arr equal to target, or False otherwise.
//===============================================================================

//Time Complexity: O(N)

//Steps to take
//1. create two empty objects for each array
//2. Initiate frequency counter for both objects. add one if key already exists
//3. Compare the two objects. If there do not have a shared key, then return false
//4. check the value of each key. if the value number is different, return false
//5. return true at the end of the function

function canBeEqual(target, arr) {
    let frequencyCounter1 = {};
    let frequencyCounter2 = {};

    for (i = 0; i < target.length; i++) {
        frequencyCounter1[target[i]] = frequencyCounter1[target[i]] ? frequencyCounter1[target[i]] += 1 : frequencyCounter1[target[i]] = 1
    }

    for (i = 0; i < arr.length; i++) {
        frequencyCounter2[arr[i]] = frequencyCounter2[arr[i]] ? frequencyCounter2[arr[i]] += 1 : frequencyCounter2[arr[i]] = 1
    }

    console.log(frequencyCounter1)
    console.log(frequencyCounter2)

    for (key in frequencyCounter1) {
        if (!(key in frequencyCounter2)) {
            return false
        }
        else if (frequencyCounter1[key] !== frequencyCounter2[key]) {
            return  false
        }
    }
    return true
}

//leetcode answer
// var canBeEqual = function(target, arr) {
//     let countMap = new Map();
// 	//add all values and the count number to the countMap from first array
//     for(let element of target){
//         if(!countMap.has(element)){
//             countMap.set(element,1);
//         }else{
//             countMap.set(element,countMap.get(element)+1);
//         }
//     }
// 	//if the second array has value not existed in the countMap OR the count of the value is less than 1, return false,
//     for(let element of arr){
//         if(!countMap.has(element) || countMap.get(element)<1){
//             return false;
// 	//subtract one if there is a valid value pair between second array and the countMap.
//         }else{
//             countMap.set(element,countMap.get(element)-1);
//         }
//     }
//     return true;
// };

console.log(canBeEqual([1,1,1,1], [1,1,1,1]))

