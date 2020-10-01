function multiplesOfThreeAndFive() {
  for (let i = 0; i <= 100; i++) {
    if ((i % 3 === 0) && (i % 5 === 0)) {
      console.log(`${i}!`);
      continue;
    }

    if ((i % 3 === 0) || (i % 5 === 0)) {
      console.log(i);
    }
  }
}

multiplesOfThreeAndFive();