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

function stringToSignedInteger(string) {
  let negative;
  if (string[0] === '-') {
    string = string.slice(1);
    negative = true;
  } else if (string[0] === '+') {
    string = string.slice(1);
  }

  let number = 0;
  let place = 1;
  string.split('').reverse().forEach(digit => {
    number += (DIGITS[digit] * place);
    place *= 10;
  });

  return negative ? number * -1 : number;
}

console.log(stringToSignedInteger('4321'));
console.log(stringToSignedInteger('-570'));
console.log(stringToSignedInteger('+100'));