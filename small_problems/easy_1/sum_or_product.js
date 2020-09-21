let rlSync = require('readline-sync');
let max = Number(rlSync.question('Please enter an integer greater than 0: '));
let operation = rlSync.question('Enter "s" to compute the sum, or "p" to compute the product. ');

if (operation === 's') {
  let sum = 0;
  for (let i = 1; i <= max; i++) {
    sum += i;
  }

  console.log(`The sum of the integers between 1 and ${max} is ${sum}.`);
} else if (operation === 'p') {
  let product = 1;
  for (let i = 1; i <= max; i++) {
    product *= i;
  }

  console.log(`The product of the integers between 1 and ${max} is ${product}.`);
} else {
  console.log('That is not a valid operation.');
}