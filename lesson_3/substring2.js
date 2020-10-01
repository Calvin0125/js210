function substring(string, start, end) {
  if ((typeof(end) === 'undefined') || (end > string.length)) {
    end = string.length;
  }
  
  if (start > end) {
    [start, end] = [end, start];
  }

  if ((start < 0) || (isNaN(start))) {
    start = 0;
  }

  if ((end < 0) || (isNaN(end))) {
    end = 0;
  }

  if (start > string.length) {
    start = string.length;
  }

  let substring = '';
  for (let i = start; i < end; i++) {
    substring += string[i];
  }

  return substring;
}

let string = 'hello world';

console.log(substring(string, 2, 4));    // "ll"
console.log(substring(string, 4, 2));    // "ll"
console.log(substring(string, 0, -1));   // ""
console.log(substring(string, 2));       // "llo world"
console.log(substring(string, 'a'));     // "hello world"
console.log(substring(string, 8, 20));   // "rld"