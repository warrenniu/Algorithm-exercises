function change(cash) {
  // Your code goes here

  const change = {
    two: 0,
    five: 0,
    ten: 0,
  };
  if (cash <= 1 || cash === 3) return null;
  let integer = Math.floor(cash / 10);
  if (integer > 0) change.ten = integer;
  let decimal = (cash - integer) * 10;
  if (decimal === 5) {
    change.five = 1;
  } else if (decimal === 2) {
    change.two = 1;
  } else if (decimal === 4) {
    change.two = 2;
  } else if (decimal === 6) {
    change.two = 3;
  } else if (decimal === 7) {
    change.five = 1;
    change.two = 1;
  } else if (decimal === 8) {
    change.two = 4;
  } else if (decimal === 9) {
    change.five = 1;
    change.two = 2;
  } else {
    return null;
  }

  return change;
}

console.log(change(55));
