function swap(string) {
  let words = string.split(' ');
  words = words.map(word => {
    word = word.split('');
    let lastIndex  = word.length - 1;
    [word[0], word[lastIndex]] = [word[lastIndex], word[0]];
    return word.join('');
  });
  return words.join(' ');
}

console.log(swap('Oh what a wonderful day it is'));  // "hO thaw a londerfuw yad ti si"
console.log(swap('Abcde'));                          // "ebcdA"
console.log(swap('a'));                              // "a"