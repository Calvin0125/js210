let rlSync = require('readline-sync');
let first = Number(rlSync.question("Enter the first number: "));
let second = Number(rlSync.question("Enter the second number: "));
console.log(`${first} + ${second} = ${first + second}`);