function stringy(num) {
  let binaryString = ''
  for (let i = 1; i <= num; i++) {
    if (i % 2 === 1) {
      binaryString += '1';
    } else {
      binaryString += '0';
    }
  }

  return binaryString;
}

console.log(stringy(6));    // "101010"
console.log(stringy(9));    // "101010101"
console.log(stringy(4));    // "1010"
console.log(stringy(7));    // "1010101"