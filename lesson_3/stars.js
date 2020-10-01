function generatePattern(nStars) {
  for (let i = 1; i <= nStars; i++) {
    let line = '';
    for (let j = 1; j <= nStars; j++) {
      if (j <= i) {
        line += j;
      } else {
        line += '*';
      }
    }
    console.log(line);
  }
}

generatePattern(7);