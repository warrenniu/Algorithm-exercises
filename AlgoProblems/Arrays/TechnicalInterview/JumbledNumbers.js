// In this challenge, you're given a string containing jumbled letters from several concatenated words. Each word is a numeral from zero to nine. Each numeral may be used multiple times in the jumbled string.
// Write a program that returns integers corresponding to the numerals used to form the jumbled string. Integers must be sorted in ascending order.
// For example, reuonnoinfe are shuffled letters of the strings one four nine. Your program's output should be 149.

function JumbledNumbers(str) {
  const numeralArray = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];

  let result = "";

  for (let i = 0; i < numeralArray.length; i++) {
    for (let j = 0; j < numeralArray[i].length; j++) {
      for (let k = 0; k < str.length; k++) {
        if (str[k] == numeralArray[i][j]) {
          continue;
        }
      }
      result += console.log(numeralArray[i][j]);
    }
  }
}

console.log(JumbledNumbers("reuonnoinfe"));
