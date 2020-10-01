function leadingSubstrings(string) {
  let substrings = [];
  for (let i = 1; i <= string.length; i++) {
    substrings.push(string.slice(0, i));
  }

  return substrings;
}

function substrings(string) {
  let result = [];
  for (let i = 0; i < string.length; i++) {
    result = result.concat(leadingSubstrings(string.slice(i)));
  }

  return result;
}

console.log(substrings('abcde'));