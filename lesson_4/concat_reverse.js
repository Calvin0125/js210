function concatReverse(array) {
  return array.concat(array.slice(0).reverse());
}

console.log(concatReverse([1, 2, 3]));