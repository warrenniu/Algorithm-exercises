// Reformat a series of strings into Camel Case by returning the fragments from input as a single "sentence". For example, consider the following input:

// Camel
// Case

// LOOKS
// like
// ThIs
// Would result in:

// camelCase looksLikeThis

//1.

function camelCaseMachine(str) {
  let strArray = str.split(" ");
  console.log(strArray);

  for (let i = 0; i < strArray.length; i++) {
    for (let j = 0; j < strArray[i].length; j++) {
      if ((j = 0)) {
        strArray[i].toLowerCase();
      } else {
        strArray[i][0].toUpperCase();
      }
    }
  }
  return strArray.join();
}

console.log(camelCaseMachine("AppleOne AppleTWO APPLEthree"));
