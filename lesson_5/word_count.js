function wordCount(string) {
  let count = {};
  let words = string.split(' ');
  words.forEach(word => {
    count[word] = typeof count[word] === 'undefined' ? 1 : count[word] + 1;
  });
  return count;
}

console.log(wordCount('box car cat bag box'));