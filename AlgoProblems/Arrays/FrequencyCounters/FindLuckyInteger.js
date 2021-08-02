//===============================================================================
//Given an array of integers arr, a lucky integer is an integer which has a frequency in the array equal to its value
//Return a lucky integer in the array. If there are multiple lucky integers return the largest of them. If there is no lucky integer return -1.
//===============================================================================

//Constraints
// 1 <= arr.length <= 500
// 1 <= arr[i] <= 500

//Steps
//1. Initialize a freqCounter hash. This will store the freq count of each element
//2. Initialize an array. This will store the matching elements
//3. Loop over input array. Populating freqCounter hash
//4. Loop over hash -> If key is equal to its value, push the key into array
//5. If array.length is 0, return 0
//6. Loop over array. Initialize largestNumber and set it to 0. Compare each element -> if larger, set it to largestNumber
//7. Return largestNumber

function findLucky(arr) {
    const freqCounter = {};
    const array = [];

    for (let i = 0; i < arr.length; i++) {
        freqCounter[arr[i]] = freqCounter[arr[i]] ? freqCounter[arr[i]] += 1 : freqCounter[arr[i]] = 1
    };

    for (key in freqCounter) {
        if (parseInt(key) === freqCounter[key]) {
            array.push(parseInt(key))
        }
    };

    if (array.length < 1) {
        return -1
    }
    else {
        let largestNumber = 0;
        for (let i = 0; i < array.length; i++) {
            if (array[i] > largestNumber) {
                largestNumber = array[i]
            }
        }
        return largestNumber
    };
};

console.log(findLucky([7,7,7,7,7,7,7]))
