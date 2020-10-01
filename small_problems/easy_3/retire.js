let rlSync = require('readline-sync');
let age = rlSync.question('What is your age? ');
let retireAge = rlSync.question('At what age would you like to retire? ');
let workLeft = retireAge - age;
let currentYear = new Date().getFullYear();
let retireYear = currentYear + workLeft;
console.log(`It's ${currentYear}. You will retire in ${retireYear}.`);
console.log(`You have only ${workLeft} years of work to go!`);
