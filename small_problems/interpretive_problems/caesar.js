function isUpperLetter(char) {
  let charCode = char.charCodeAt(0);
  return ((charCode >= 65) && (charCode <= 90));
}

function isLowerLetter(char) {
  let charCode = char.charCodeAt(0);
  return ((charCode >= 97) && (charCode <= 122));
}

function shiftLetter(char, shift) {
  if (isUpperLetter(char)) {
    let charCode = char.charCodeAt(0);
    charCode += (shift % 26);
    if (charCode > 90) {
      charCode -= 26;
    } else if (charCode < 65) {
      charCode += 26;
    }

    return String.fromCharCode(charCode);
  } else if (isLowerLetter(char)) {
    let charCode = char.charCodeAt(0);
    charCode += (shift % 26);
    if (charCode > 122) {
      charCode -= 26;
    } else if (charCode < 97) {
      charCode += 26;
    }

    return String.fromCharCode(charCode);
  } else {
    return char;
  }
}

function caesarEncrypt(string, shift) {
  let letters = string.split('');
  letters = letters.map(letter => shiftLetter(letter, shift));
  return letters.join('');
}

console.log(caesarEncrypt('A', 0));       // "A"
console.log(caesarEncrypt('A', 3));       // "D"

// wrap around
console.log(caesarEncrypt('y', 5));       // "d"
console.log(caesarEncrypt('a', 47));      // "v"

// all letters
console.log(caesarEncrypt('ABCDEFGHIJKLMNOPQRSTUVWXYZ', 25));
// "ZABCDEFGHIJKLMNOPQRSTUVWXY"
console.log(caesarEncrypt('The quick brown fox jumps over the lazy dog!', 5));
// "Ymj vznhp gwtbs ktc ozrux tajw ymj qfed itl!"

// many non-letters
console.log(caesarEncrypt('There are, as you can see, many punctuations. Right?; Wrong?', 2));
// "Vjgtg ctg, cu aqw ecp ugg, ocpa rwpevwcvkqpu. Tkijv?; Ytqpi?"