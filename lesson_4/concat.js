function concat(arr1, arr2) {
  let newArr = [];

  for (let i = 0; i < arr1.length; i++) {
    newArr[i] = arr1[i];
  }

  let newArrIndex = newArr.length;

  for (let i = 0; i < arr2.length; i++) {
    newArr[newArrIndex] = arr2[i];
    newArrIndex += 1;
  }

  return newArr;
}

console.log(concat([1, 2, 3], [4, 5, 6]));