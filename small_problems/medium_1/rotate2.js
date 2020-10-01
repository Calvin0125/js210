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
  return numArray.map(num => Number(num)).join('');
}

console.log(rotateRightmostDigits(735291, 1));      // 735291
console.log(rotateRightmostDigits(735291, 2));      // 735219
console.log(rotateRightmostDigits(735291, 3));      // 735912
console.log(rotateRightmostDigits(735291, 4));      // 732915
console.log(rotateRightmostDigits(735291, 5));      // 752913
console.log(rotateRightmostDigits(735291, 6));      // 352917
