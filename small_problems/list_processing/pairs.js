function cartesianProduct(arr1, arr2) {
  let product = [];
  for (let i = 0; i < arr1.length; i++) {
    let subArr = [];
    for (let j = 0; j < arr2.length; j++) {
      subArr.push(arr1[i], arr2[j]);
      product.push(subArr);
      subArr = [];
    }
  }

  return product;
}

function multiplyAllPairs(arr1, arr2) {
  return cartesianProduct(arr1, arr2).map(subArr => {
    return subArr.reduce((memo, elem) => memo * elem);
  }).sort((a, b) => a - b);
}

console.log(multiplyAllPairs([2, 4], [4, 3, 1, 2]));    // [2, 4, 4, 6, 8, 8, 12, 16]