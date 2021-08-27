// You are given an array prices where prices[i] is the price of a given stock on the ith day.
// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

// Example 1:
// Input: prices = [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
// Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.

// Example 2:
// Input: prices = [7,6,4,3,1]
// Output: 0
// Explanation: In this case, no transactions are done and the max profit = 0.

// Constraints:
// 1 <= prices.length <= 105
// 0 <= prices[i] <= 104

//Steps
//1. Initialize a variable called totalMin. Set it to Infinity
//2. Initialize a variable called currentMin. Set it to 0
//3. Initialize a variable called lowestIndex. In loop, set current index to lowestIndex
//4. Loop over input array using a for loop

// function maxProfit(prices) {
//   let currentMin = Infinity;
//   let currentMax = -Infinity;
//   let lowestIndex = 0;
//   let highestIndex = 0;

//   for (let i = 0; i < prices.length; i++) {
//     if (prices[i] < currentMin) {
//       currentMin = prices[i];
//       lowestIndex = i;
//     }
//   }
//   for (let i = lowestIndex; i < prices.length; i++) {
//     if (prices[i] > currentMax) {
//       currentMax = prices[i];
//       highestIndex = i;
//     }
//   }
//   return prices[highestIndex] - prices[lowestIndex];
// }

//leetcode
function maxProfit(prices) {
  let result = 0;
  let minimum = prices[0];

  for (let i = 0; i < prices.length; i++) {
    minimum = Math.min(prices[i], minimum);
    result = Math.max(result, prices[i] - minimum);
  }
}

console.log(maxProfit([7, 6, 4, 3, 1]));
