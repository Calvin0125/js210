function repeater(string) {
  let letters = string.split('');
  letters = letters.map(letter => letter + letter);
  return letters.join('');
}

console.log(repeater('Hello'));        // "HHeelllloo"
console.log(repeater('Good job!'));    // "GGoooodd  jjoobb!!"
console.log(repeater(''));             // ""