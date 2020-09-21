function isLetter(char) {
  return char.toUpperCase() !== char.toLowerCase();
}

function cleanUp(string) {
  let cleaned = ''
  for (let i = 0; i < string.length; i++) {
    if (isLetter(string[i])) {
      cleaned += string[i];
    } else if (cleaned.slice(-1) !== ' ') {
      cleaned += ' ';
    }
  }

  return cleaned;
}

console.log(cleanUp("---what's my +*& line?"));