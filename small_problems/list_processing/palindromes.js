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

function palindromes(string) {
  let sections = substrings(string);
  return sections.filter(substring => {
    return (substring === substring.split('').reverse().join(''))
           && substring.length > 1;
  });
}

console.log(palindromes('abcd'));       // []
console.log(palindromes('madam'));      // [ "madam", "ada" ]

console.log(palindromes('hello-madam-did-madam-goodbye'));
// returns
[ "ll", "-madam-", "-madam-did-madam-", "madam", "madam-did-madam", "ada",
  "adam-did-mada", "dam-did-mad", "am-did-ma", "m-did-m", "-did-", "did",
  "-madam-", "madam", "ada", "oo" ]

console.log(palindromes('knitting cassettes'));
// returns
[ "nittin", "itti", "tt", "ss", "settes", "ette", "tt" ]