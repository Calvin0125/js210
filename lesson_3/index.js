function indexOf(firstString, secondString) {
  for (let i = 0; i < firstString.length; i++) {
    if (firstString[i] !== secondString[0]) {
      continue;
    }

    let match = firstString[i];
    for (let j = 1; j < secondString.length; j++) {
      match += firstString[i + j];
    }

    if (match === secondString) {
      return i;
    }
  }
  return -1;
}

console.log(indexOf('Some strings', 's'));                      // 5
console.log(indexOf('Blue Whale', 'Whale'));                    // 5
console.log(indexOf('Blue Whale', 'Blute'));                    // -1
console.log(indexOf('Blue Whale', 'leB'));                      // -1

function lastIndexOf(firstString, secondString) {
  for (let i = firstString.length - 1; i > 0; i--) {
    if (firstString[i] !== secondString[0]) {
      continue;
    }

    let match = firstString[i];
    for (let j = 1; j < secondString.length; j++) {
      match += firstString[i + j];
    }

    if (match === secondString) {
      return i;
    }
  }
  return -1;
}

console.log(lastIndexOf('Some strings', 's'));                  // 11
console.log(lastIndexOf('Blue Whale, Killer Whale', 'Whale'));  // 19
console.log(lastIndexOf('Blue Whale, Killer Whale', 'all'));    // -1