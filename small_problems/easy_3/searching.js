let rlSync = require('readline-sync');
let numbers = [];
numbers[0] = rlSync.question('Enter the 1st number: ');
numbers[1] = rlSync.question('Enter the 2nd number: ');
numbers[2] = rlSync.question('Enter the 3rd number: ');
numbers[3] = rlSync.question('Enter the 4th number: ');
numbers[4] = rlSync.question('Enter the 5th number: ');
let last = rlSync.question('Enter the last number: ');
if (numbers.includes(last)) {
  console.log(`The number ${last} appears in [${numbers}]`);
} else {
  console.log(`The number ${last} does not appear in [${numbers}]`);
}