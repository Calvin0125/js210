let rlSync = require('readline-sync');
let length = Number(rlSync.question('Enter the length of the room in meters: '));
let width = Number(rlSync.question('Enter the width of the room in meters: '));
let sqMeter = (length * width).toFixed(2);
let sqFeet = (sqMeter * 10.7639).toFixed(2);
console.log(`The area of the room is ${sqMeter} square meters (${sqFeet} square feet).`)
