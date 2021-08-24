function removeRows(S) {
  let str = S.split("\n");

  console.log(str);

  for (let i = 1; i < str.length; i++) {
    let commaSep = str[i].split(",");
    console.log(commaSep);
    for (let j = 0; j < commaSep.length; j++) {
      if (commaSep[j] === "NULL") {
        console.log("removed");
        console.log(str);
        str.splice(i, 1);
      }
    }
    console.log(commaSep);
  }

  console.log(str);

  let variable = str[0].concat("\n" + str[1]);
  // let variable = str[0] + "\n"
  str.splice(0, 2);
  str.unshift(variable);
  console.log(variable);
  //   str[0] + "\n";
  //   str.join();

  console.log(str);
  return str.join("\n");
}

console.log(removeRows("header,header\nANNUL,ANNULLED\nnull,NILL\nNULL,NULL"));
