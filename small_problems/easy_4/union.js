function union(array1, array2) {
  let result = [];
  let maxLength = array1.length > array2.length ? array1.length : array2.length;
  for (let i = 0; i < maxLength; i++) {
    if ((!result.includes(array1[i])) && (i < array1.length)) {
      result.push(array1[i]);
    }

    if ((!result.includes(array2[i])) && (i < array2.length)) {
      result.push(array2[i]);
    }
  }

  return result;
}

console.log(union([1, 3, 5], [3, 6, 9]));    // [1, 3, 5, 6, 9]