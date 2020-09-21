function fibIndexByLength(length) {
  if (length === 1) {
    return 1;
  }

  let a = 1;
  let b = 1;
  let currentNum = a + b;
  let index = 3;
  while (currentNum.toString().length < length) {
    a = b;
    b = currentNum;
    currentNum = a + b;
    index += 1;
  }

  return index;
}

console.log(fibIndexByLength(2));
console.log(fibIndexByLength(10));
console.log(fibIndexByLength(16));