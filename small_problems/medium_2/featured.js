function nextMultipleOf7(n) {
  n += 1;
  while (n % 7 !== 0) {
    n += 1;
  }

  return n;
}

function isFeatured(n) {
  let digitsUnique = true;
  let digits = String(n).split('');
  let alreadySeen = []
  for (let i = 0; i < digits.length; i++) {
    if (alreadySeen.includes(digits[i])) {
      digitsUnique = false;
    }

    alreadySeen.push(digits[i]);
  }
  return (n % 7 === 0) && (n % 2 === 1) && (digitsUnique);
}

function featured(n) {
  if (n >= 9876543201) {
    return "No more featured numbers!";
  }

  n = nextMultipleOf7(n);
  while (true) {
    if (isFeatured(n)) {
      return n;
    } else {
      n += 7;
    }
  }
}

console.log(featured(12));           // 21
console.log(featured(20));           // 21
console.log(featured(21));           // 35
console.log(featured(997));          // 1029
console.log(featured(1029));         // 1043
console.log(featured(999999));       // 1023547
console.log(featured(999999987));    // 1023456987