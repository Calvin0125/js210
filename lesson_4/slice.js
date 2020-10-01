function slice(array, start, end) {
  let subArr = [];
  let subArrIndex = 0;
  let arrayIndex = start;
  while (arrayIndex < end) {
    subArr[subArrIndex] = array[arrayIndex];
    subArrIndex += 1;
    arrayIndex += 1;
  }

  return subArr;
}

console.log(slice([1, 2, 3, 4, 5], 0, 2));                      // [ 1, 2 ]
console.log(slice(['a', 'b', 'c', 'd', 'e', 'f', 'g'], 1, 3));  // [ 'b', 'c' ]