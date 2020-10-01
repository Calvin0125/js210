function staggeredCase(string) {
  let uppercase = true;
  return string.split('').map(char => {
    if (uppercase) {
      uppercase = false;
      return char.toUpperCase();
    } else {
      uppercase = true;
      return char.toLowerCase();
    }
  }).join('');
}

console.log(staggeredCase('I Love Launch School!'));        // "I LoVe lAuNcH ScHoOl!"
console.log(staggeredCase('ALL_CAPS'));                     // "AlL_CaPs"
console.log(staggeredCase('ignore 77 the 444 numbers'));    // "IgNoRe 77 ThE 444 NuMbErS"