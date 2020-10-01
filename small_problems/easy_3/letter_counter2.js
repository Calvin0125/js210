function wordSizes(string) {
  if (!string) {
    return {};
  }
  
  let counts = {};
  string.split(' ').forEach(word => {
    word = word.replace(/[^a-zA-Z]/, '');
    let length = word.length;
    if (counts[length]) {
      counts[length] += 1;
    } else {
      counts[length] = 1;
    }
  });
  return counts;
}

console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 2 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 3 }
console.log(wordSizes("What's up doc?"));                              // { "5": 1, "2": 1, "3": 1 }
console.log(wordSizes(''));                                            // {}