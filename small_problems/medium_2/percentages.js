function letterPercentages(string) {
  let percentages = {};
  let lowercase = 0;
  let uppercase = 0;
  let neither = 0;
  let total = string.length;
  string.split('').forEach(char => {
    if (char.match(/[a-z]/)) {
      lowercase += 1;
    } else if (char.match(/[A-Z]/)) {
      uppercase += 1;
    } else {
      neither += 1;
    }
  });

  percentages.lowercase = ((lowercase / total) * 100).toFixed(2);
  percentages.uppercase = ((uppercase / total) * 100).toFixed(2);
  percentages.neither = ((neither / total) * 100).toFixed(2);
  return percentages;
}

console.log(letterPercentages('abCdef 123'));
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

console.log(letterPercentages('AbCd +Ef'));
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

console.log(letterPercentages('123'));
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }