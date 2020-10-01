function merge(arr1, arr2) {
  let index1 = 0;
  let index2 = 0;
  let merged = [];
  while ((index1 < arr1.length) || (index2 < arr2.length)) {
    if ((arr1[index1] > arr2[index2]) || (arr1[index1] === undefined)) {
      merged.push(arr2[index2]);
      index2 += 1;
    } else {
      merged.push(arr1[index1]);
      index1 += 1;
    }
  }

  return merged;
}

console.log(merge([1, 5, 9], [2, 6, 8]));      // [1, 2, 5, 6, 8, 9]
console.log(merge([1, 1, 3], [2, 2]));         // [1, 1, 2, 2, 3]
console.log(merge([], [1, 4, 5]));             // [1, 4, 5]
console.log(merge([1, 4, 5], []));             // [1, 4, 5]