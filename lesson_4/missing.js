function missing(array) {
  let max = Math.max(...array);
  let min = Math.min(...array);
  let missing = [];
  for (let i = min + 1; i < max; i++) {
    if (!array.includes(i)) {
      missing.push(i);
    }
  }

  return missing;
}

console.log(missing([-3, -2, 1, 5]));                  // [-1, 0, 2, 3, 4]
console.log(missing([1, 2, 3, 4]));                    // []
console.log(missing([1, 5]));                          // [2, 3, 4]
console.log(missing([6]));                             // []