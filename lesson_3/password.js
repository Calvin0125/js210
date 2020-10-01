let password = 'password';
let rlSync = require('readline-sync');

for (let i = 0; i < 3; i++) {
  let guess = rlSync.question("Enter the password: ");
  if (guess === password) {
    console.log("Access Granted!");
    break;
  } else if (i == 2) {
    console.log("Access Denied!");
  }
}

