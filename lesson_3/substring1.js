function substr(string, start, length) {
  if (start < 0) {
    start = string.length + start;
  }

  let finalIndex;
  if ((start + length) > string.length) {
    finalIndex = string.length - 1;
  } else {
    finalIndex = start + length - 1;
  }

  let substring = '';
  for (let i = start; i <= finalIndex; i++) {
    substring += string[i];
  }

  return substring;
}


let string = 'hello world';
console.log(substr(string, 2, 4));      // "llo "
console.log(substr(string, -3, 2));     // "rl"
console.log(substr(string, 8, 20));     // "rld"
console.log(substr(string, 0, -20));    // ""
console.log(substr(string, 0, 0));      // ""