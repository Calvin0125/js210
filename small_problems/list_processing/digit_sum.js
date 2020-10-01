function sum(num) {
  return String(num).split('').reduce((memo, num) => memo + Number(num), 0);
}

console.log(sum(23));
console.log(sum(496));
console.log(sum(123456789));