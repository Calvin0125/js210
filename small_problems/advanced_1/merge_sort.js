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

function mergeSort(arr1) {
  if (arr1.length === 1) {
    return arr1;
  }

  let left = arr1.slice(0, Math.ceil(arr1.length / 2));
  let right = arr1.slice(left.length);
  right = mergeSort(right);
  left = mergeSort(left);
  return merge(left, right);
}

console.log(mergeSort([9, 5, 7, 1]));           // [1, 5, 7, 9]
console.log(mergeSort([5, 3]));                 // [3, 5]
console.log(mergeSort([6, 2, 7, 1, 4]));        // [1, 2, 4, 6, 7]

console.log(mergeSort(['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie']));
// ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]

console.log(mergeSort([7, 3, 9, 15, 23, 1, 6, 51, 22, 37, 54, 43, 5, 25, 35, 18, 46]));
// [1, 3, 5, 6, 7, 9, 15, 18, 22, 23, 25, 35, 37, 43, 46, 51, 54]