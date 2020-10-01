function showMultiplicativeAverage(array) {
  return (array.reduce((memo, element) => memo * element) / array.length).toFixed(3);
}

console.log(showMultiplicativeAverage([3, 5]));                   // "7.500"
console.log(showMultiplicativeAverage([2, 5, 7, 11, 13, 17]));    // "28361.667"