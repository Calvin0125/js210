function leadingSubstrings(string) {
  let substrings = [];
  for (let i = 1; i <= string.length; i++) {
    substrings.push(string.slice(0, i));
  }

  return substrings;
}

console.log(leadingSubstrings('abc'));      // ["a", "ab", "abc"]
console.log(leadingSubstrings('a'));        // ["a"]
console.log(leadingSubstrings('xyzzy'));    // ["x", "xy", "xyz", "xyzz", "xyzzy"]