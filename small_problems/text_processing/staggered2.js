function staggeredCase(string) {
  let uppercase = true;
  return string.split('').map(char => {
    if ((uppercase) && (char.match(/[a-z]/i))) {
      uppercase = false;
      return char.toUpperCase();
    } else if (char.match(/[a-z]/i)) {
      uppercase = true;
      return char.toLowerCase();
    } else {
      return char;
    }
  }).join('');
}

console.log(staggeredCase('I Love Launch School!'));        // "I lOvE lAuNcH sChOoL!"
console.log(staggeredCase('ALL CAPS'));                     // "AlL cApS"
console.log(staggeredCase('ignore 77 the 444 numbers'));    // "IgNoRe 77 ThE 444 nUmBeRs"
