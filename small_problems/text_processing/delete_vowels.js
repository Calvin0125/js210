const VOWELS = ['a', 'e', 'i', 'o', 'u'];

function removeVowels(arr) {
  return arr.map(word => {
    word = word.split('');
    word = word.filter(letter => !VOWELS.includes(letter.toLowerCase()));
    return word.join('');
  });
}

console.log(removeVowels(['abcdefghijklmnopqrstuvwxyz']));         // ["bcdfghjklmnpqrstvwxyz"]
console.log(removeVowels(['green', 'YELLOW', 'black', 'white']));  // ["grn", "YLLW", "blck", "wht"]
console.log(removeVowels(['ABC', 'AEIOU', 'XYZ']));                // ["BC", "", "XYZ"]
