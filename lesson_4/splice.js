function splice(array, start, n) {
  let removed = [];
  let removedIndex = 0;
  let arrayIndex = start;
  let finalIndex = start + n;
  while (arrayIndex < finalIndex) {
    removed[removedIndex] = array[arrayIndex];
    array[arrayIndex] = array[arrayIndex + n];
    arrayIndex += 1;
    removedIndex += 1;
  }

  array.length = array.length - removed.length;
  return removed;
}

let count = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(splice(count, 2, 5));                   // [ 3, 4, 5, 6, 7 ]
console.log(count);                                 // [ 1, 2, 8 ]