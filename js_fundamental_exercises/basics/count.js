let rlSync = require('readline-sync');
phrase = rlSync.question("Please enter a phrase: ");
console.log(`There are ${phrase.length} characters in "${phrase}".`);