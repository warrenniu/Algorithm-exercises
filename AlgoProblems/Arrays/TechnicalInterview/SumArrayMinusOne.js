//Come up with an algorithm where all the numbers are summed after subtracted by 1

//Challenge: Can we solve this using the reduce method?

//[2,4,5,-3,11]

//simple approach
// function sumArray(nums) {
//     let sum = 0;
//     for (let i = 0; i < nums.length; i++) {
//         let subtractByOne = nums[i] - 1;
//         sum += subtractByOne
//     }
//     return sum
// }

//reduce method
function sumArray(nums) {
  const reducer = (accumulator, currentValue) => {
    return accumulator + currentValue - 1;
  };
  return nums.reduce(reducer, 0);
}

console.log(sumArray([2, 4, 5, -3, 1]));
