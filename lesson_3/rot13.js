const SHIFT = 13;
const LAST_UPPER_LETTER = 'Z'.charCodeAt(0);
const LAST_LOWER_LETTER = 'z'.charCodeAt(0);

function isUpperLetter(char) {
  return (char.toUpperCase() !== char.toLowerCase()) &&
         (char.toUpperCase() === char);
}

function isLowerLetter(char) {
  return (char.toLowerCase() !== char.toUpperCase()) &&
         (char.toLowerCase() === char);
}

function rotateLetter(char) {
  let charCode = char.charCodeAt(0);
  if (isUpperLetter(char)) {
    if (charCode + SHIFT > LAST_UPPER_LETTER) {
      charCode -= SHIFT;
    } else {
      charCode += SHIFT;
    }

    return String.fromCharCode(charCode);
  } else if (isLowerLetter(char)) {
    if (charCode + SHIFT > LAST_LOWER_LETTER) {
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
  for (let index = 0; index < string.length; index++) {
    rotated += rotateLetter(string[index]);
  }

  return rotated;
}

console.log(rot13('Teachers open the door, but you must enter by yourself.'));
console.log(rot13(rot13('Teachers open the door, but you must enter by yourself.')));
console.log(rot13('H3ll0 World!!'));