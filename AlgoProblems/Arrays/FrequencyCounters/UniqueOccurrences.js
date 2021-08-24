//===============================================================================
//Given an array of integers arr, write a function that returns true if and only if the number of occurrences of each value in the array is unique
//===============================================================================

//Constraints
//1. 1 <= arr.length <= 1000
//2. -1000 <= arr[i] <= 1000

//Steps to take
//1. create an empty object called frequencyCounter
//2. Initiate frequency counter for both objects. add one if key already exists
//3. Check the values of each key. If there is a match, return false
//4. return true at the end of the function

function uniqueOccurrences(arr) {
  let frequencyCounter = {};

  for (val of arr) {
    frequencyCounter[val] = frequencyCounter[val]
      ? (frequencyCounter[val] += 1)
      : (frequencyCounter[val] = 1);
  }

  console.log(frequencyCounter);

  let object = Object.values(frequencyCounter);
  console.log(object);

  for (let i = 0; i < object.length; i++) {
    for (let j = 0; j < object.length; j++) {
      if (i !== j && object[i] === object[j]) {
        return false;
      }
    }
  }

  return true;
}

console.log(uniqueOccurrences([-3, 0, 1, -3, 1, 1, 1, -3, 10, 0]));
