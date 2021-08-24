//Given two strings A and B, return true if and only if A can become B after some number of shifts on A.
// A shift on A consists of moving the leftmost character of A to the rightmost position.
// For example, if A = "abcde", then it will be "bcdea" after one shift.

// Example 1:
// Input: s = "abcde", goal = "cdeab"
// Output: true

// Example 2:
// Input: s = "abcde", goal = "abced"
// Output: false

// Constraints:
// 1 <= s.length, goal.length <= 100
// s and goal consist of lowercase English letters.

function rotateString(A, B) {
  let Aarray = A.split("");
  const ALength = Aarray.length;

  //edge case if both inputs were empty
  if (A === "" && B === "") {
    return true;
  }

  for (let i = 0; i < ALength; i++) {
    let char = Aarray.pop();
    Aarray.unshift(char);

    if (Aarray.join("") === B) {
      return true;
    }
  }
  return false;
}

function rotateString(A, B) {
  let newString = A.concat(A);
  return newString.includes(B);
}

console.log(rotateString("waterbottle", "erbtlewat"));
