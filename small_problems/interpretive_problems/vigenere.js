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

const CHAR_CODE_OFFSET = 97;

function getShift(shiftWord) {
  shiftWord = shiftWord.toLowerCase();
  let shift = [];
  shiftWord.split('').forEach(char => {
    shift.push(char.charCodeAt(0) - CHAR_CODE_OFFSET);
  });

  return shift;
}

function vigenereEncrypt(string, shiftWord) {
  let letters = string.split('');
  let shiftIndex = -1;
  let shift = getShift(shiftWord);
  letters = letters.map(letter => {
    if (isLowerLetter(letter) || isUpperLetter(letter)) {
      shiftIndex += 1;
    }
    
    if (shiftIndex === shift.length) {
      shiftIndex = 0;
    }

    return shiftLetter(letter, shift[shiftIndex]);
  });
  return letters.join('');
}

console.log(vigenereEncrypt("Pineapples don't go on pizzas!", 'meat'));
