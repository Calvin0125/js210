function logMultiples(num) {
  for (let i = 100; i > 0; i--) {
    if ((i % num === 0) && (i % 2 === 1)) {
      console.log(i);
    }
  }
}

logMultiples(17);