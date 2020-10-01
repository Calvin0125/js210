function count(array, element) {
  return array.filter(x => x === element).length;
}

function repeatedCharacters(string) {
  let chars = {};
  let letters = string.toLowerCase().split('');
  letters.forEach(letter => {
    if ((typeof(chars[letter]) === 'undefined') && (count(letters, letter) > 1)) {
      chars[letter] = count(letters, letter);
    }
  });
  return chars;
}

console.log(repeatedCharacters('Programming'));
console.log(repeatedCharacters('Baseless'));