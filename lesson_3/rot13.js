const SHIFT = 13;
const LAST_UPPER_LETTER = 'Z'.charCodeAt(0);
const LAST_LOWER_lETTER = 'z'.charCodeAt(0);

function isUpperLetter(char) {
  return (char.toUpperCase() !== char.toLowerCase()) &&
         (char.toUpperCase() === char);
}

function isLowerLetter(char) {
  return (char.toLowerCase() !== char.toUpperCase()) &&
         (char.toLowerCase() === char);
}

function rotateLetter(char) {
  if (isUpperLetter(char)) {
    let charCode = char.charCodeAt(0);
    if (charCode + SHIFT > LAST_UPPER_LETTER) {
      charCode -= SHIFT;
    } else {
      charCode += SHIFT;
    }

    return String.fromCharCode(charCode);
  } else if (isLowerLetter(char)) {
    let charCode = char.charCodeAt(0);
    if (charCode + SHIFT > LAST_LOWER_lETTER) {
      charCode -= SHIFT;
    } else {
      charCode += SHIFT;
    }

    return String.fromCharCode(charCode);
  } else {
    return char;
  }
}

function rot13(string) {
  let rotated = '';
  for (let i = 0; i < string.length; i++) {
    rotated += rotateLetter(string[i]);
  }

  return rotated;
}

console.log(rot13('Teachers open the door, but you must enter by yourself.'));
console.log(rot13(rot13('Teachers open the door, but you must enter by yourself.')));
console.log(rot13('H3ll0 World!!'));