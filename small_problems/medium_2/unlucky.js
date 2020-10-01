function unlucky(year) {
  let date = new Date(year, 0, 13);
  let sum = 0;
  for (let i = 1; i <= 11; i++) {
    if (date.getDay() === 5) {
      sum += 1;
    }

    date.setMonth(i);
  }

  return sum;
}

console.log(unlucky(1986));
console.log(unlucky(2015));
console.log(unlucky(2017));
console.log(unlucky(2020));