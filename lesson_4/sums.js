function matrixSums(arr) {
  return arr.map(subArr => {
    return subArr.reduce((accumulator, element) => {
      return accumulator + element;
    }, 0);
  });
}

console.log(matrixSums([[2, 8, 5], [12, 48, 0], [12]]));  // returns [15, 60, 12]
