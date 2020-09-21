function getSuffix(century) {
  if ((century % 100 >= 11) && (century % 100 <= 13)) {
    return 'th';
  } else if (century % 10 === 1) {
    return 'st';
  } else if (century % 10 === 2) {
    return 'nd';
  } else if (century % 10 === 3) {
    return 'rd';
  } else {
    return 'th';
  }
}

function century(year) {
  if (year % 100 === 0) {
    year -= 1;
  }

  let century = Math.floor(year / 100 + 1);
  return `${century}${getSuffix(century)}`;
}

console.log(century(2000));        // "20th"
console.log(century(2001));        // "21st"
console.log(century(1965));        // "20th"
console.log(century(256));         // "3rd"
console.log(century(5));           // "1st"
console.log(century(10103));       // "102nd"
console.log(century(1052));        // "11th"
console.log(century(1127));        // "12th"
console.log(century(11201));       // "113th"