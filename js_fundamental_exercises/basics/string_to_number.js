"use strict";
const DIGITS = {
  '1': 1,
  '2': 2,
  '3': 3,
  '4': 4,
  '5': 5,
  '6': 6,
  '7': 7,
  '8': 8,
  '9': 9,
  '0': 0,
};

function stringToInteger(string) {
  let number = 0;
  let place = 1;
  string.split('').reverse().forEach(digit => {
    number += (DIGITS[digit] * place);
    place *= 10;
  });

  return number;
}

console.log(stringToInteger('4321'));
console.log(stringToInteger('570'));