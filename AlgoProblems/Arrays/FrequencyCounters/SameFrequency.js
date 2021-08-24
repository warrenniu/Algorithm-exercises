//===============================================================================
//Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits
//===============================================================================

//Time Complexity: O(N)

//Steps to take
//1. create two empty objects for each integer
//2. Initiate frequency counter for both objects. add one if key already exists
//3. Compare the two objects. If there do not have a shared key, then return false
//4. check the value of each key. if the value number is different, return false
//5. return true at the end of the function

function sameFrequency(num1, num2) {
  let frequencyCounter1 = {};
  let frequencyCounter2 = {};
  let arrayOfNum1 = Array.from(String(num1), Number);
  let arrayOfNum2 = Array.from(String(num2), Number);
  console.log(arrayOfNum1);

  if (arrayOfNum1.length !== arrayOfNum2.length) {
    return false;
  }

  for (val of arrayOfNum1) {
    frequencyCounter1[val]
      ? (frequencyCounter1[val] += 1)
      : (frequencyCounter1[val] = 1);
  }
  for (val of arrayOfNum2) {
    frequencyCounter2[val]
      ? (frequencyCounter2[val] += 1)
      : (frequencyCounter2[val] = 1);
  }
  console.log(frequencyCounter1);
  console.log(frequencyCounter2);

  for (key in frequencyCounter1) {
    if (!(key in frequencyCounter2)) {
      return false;
    } else if (frequencyCounter1[key] !== frequencyCounter2[key]) {
      return false;
    }
  }
  return true;
}

console.log(sameFrequency(0, 0));
