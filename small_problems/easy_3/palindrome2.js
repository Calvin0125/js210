function isAlphanumeric(char) {
  return char.match("[a-zA-Z0-9]");
}

function isRealPalindrome(string) {
  let chars = string.split('');
  letters = chars.filter(char => isAlphanumeric(char)).map(letter => letter.toLowerCase());
  return letters.join('') === letters.reverse().join('');
}

console.log(isRealPalindrome('madam'));               // true
console.log(isRealPalindrome('Madam'));               // true (case does not matter)
console.log(isRealPalindrome("Madam, I'm Adam"));     // true (only alphanumerics matter)
console.log(isRealPalindrome('356653'));              // true
console.log(isRealPalindrome('356a653'));             // true
console.log(isRealPalindrome('123ab321'));            // false