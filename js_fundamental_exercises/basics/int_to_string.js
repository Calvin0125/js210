"use strict";
const DIGITS = {
  1: 1,
  2: 2,
  3: 3,
  4: 4,
  5: 5,
  6: 6,
  7: 7,
  8: 8,
  9: 9,
  0: 0,
}

function integerToString(num) {
  if (num === 0) {
    return '0';
  }
  
  let numbers = []
  while (num > 0) {
    let currentDigit = num % 10;
    numbers.unshift(currentDigit);
    num = Math.floor(num / 10);
  }

  return numbers.join('');
}

console.log(integerToString(4321));
console.log(integerToString(0));
console.log(integerToString(5000));