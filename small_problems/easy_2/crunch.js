function crunch(string) {
  let currentChar = '';
  let newString = '';
  for (let i = 0; i < string.length; i++) {
    if (currentChar === string[i]) {
      continue;
    } else {
      newString += string[i];
      currentChar = string[i];
    }
  }

  return newString;
}

console.log(crunch('ddaaiillyy ddoouubbllee'))     // "4abcabcba"
console.log(crunch('ggggggggggggggg'));            // "g"
console.log(crunch('a'));                          // "a"
console.log(crunch(''));                           // ""