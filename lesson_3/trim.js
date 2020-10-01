function getLastCharIndex(string) {
  for (let i = string.length - 1; ; i--) {
    if (string[i] === ' ') {
      continue;
    } else {
      return i;
    }
  }
}

function trim(string) {
  let lastCharIndex = getLastCharIndex(string);

  let trimmed = '';
  let whitespace = true;
  for (let i = 0; i <= lastCharIndex; i++) {
    if (whitespace) {
      if (string[i] === ' ') {
        continue;
      } else {
        whitespace = false;
        trimmed += string[i];
      }
    } else {
      trimmed += string[i];
    }
  }
  return trimmed;
}

console.log(trim('  abc  '));  // "abc"
console.log(trim('abc   '));   // "abc"
console.log(trim(' ab c'));    // "ab c"
console.log(trim(' a b  c'));  // "a b  c"
console.log(trim('      '));   // ""
console.log(trim(''));         // ""