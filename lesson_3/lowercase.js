

function isUpperLetter(charCode) {
  if ((charCode < 65) || (charCode > 90)) {
    return false;
  } else {
    return true;
  }
}

function toLowerCase(string) {
  let lower = '';
  for (let i = 0; i < string.length; i++) {
    let ascii = string.charCodeAt(i);
    if (isUpperLetter(ascii)) {
      ascii += 32;
      lower += String.fromCharCode(ascii);
    } else {
      lower += string[i];
    }
  }
  return lower;
}

console.log(toLowerCase('ALPHABET'));    // "alphabet"
console.log(toLowerCase('123'));         // "123"
console.log(toLowerCase('abcDEF'));      // "abcdef"