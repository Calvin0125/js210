function repeat(string, times) {
  if ((typeof(times) !== 'number') || (times < 0)) {
    return undefined;
  } else if (times === 0) {
    return '';
  } else {
    let repeated = ''
    for (let i = 1; i <= times; i++) {
      repeated += string;
    }

    return repeated;
  }
}

console.log(repeat('abc', 1));       // "abc"
console.log(repeat('abc', 3));       // "abcabc"
console.log(repeat('abc', -1));      // undefined
console.log(repeat('abc', 0));       // ""
console.log(repeat('abc', 'a'));     // undefined
console.log(repeat('abc', false));   // undefined
console.log(repeat('abc', null));    // undefined
console.log(repeat('abc', '  '));    // undefined