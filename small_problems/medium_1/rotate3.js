function rotateArray(array) {
  if (!Array.isArray(array)) {
    return;
  }

  return array.slice(1).concat(array.slice(0, 1));
}

function rotateRightmostDigits(number, nDigits) {
  let numArray = String(number).split('');
  let rightSection = numArray.slice(numArray.length - nDigits);
  rightSection = rotateArray(rightSection);
  numArray.splice(numArray.length - nDigits, nDigits,  ...rightSection);
  return Number(numArray.join(''));
}

function maxRotation(num) {
  let numLength = String(num).length;
  for (let i = numLength; i >= 2; i--) {
    num = rotateRightmostDigits(num, i);
  }

  return num;
}

console.log(maxRotation(735291));          // 321579
console.log(maxRotation(3));               // 3
console.log(maxRotation(35));              // 53
console.log(maxRotation(105));             // 15 -- the leading zero gets dropped
console.log(maxRotation(8703529146));      // 7321609845