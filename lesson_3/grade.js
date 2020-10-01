let rlSync = require('readline-sync');
let total = 0;

for (let i = 1; i <= 3; i++) {
  total += Number(rlSync.question(`Enter score ${i}: `));
}

let average = total / 3;
let grade;
if (average >= 90) {
  grade = 'A';
} else if (average >= 70) {
  grade = 'B';
} else if (average >= 50) {
  grade = 'C';
} else {
  grade = 'F';
}
console.log(`Based on the average of your 3 scores, your letter grade is "${grade}"`);
