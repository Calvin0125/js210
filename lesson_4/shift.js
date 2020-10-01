function shift(array) {
  let first = array[0];
  for (let i = 0; i < array.length - 1; i++) {
    array[i] = array[i + 1]
  }
  
  array.length = array.length - 1;
  return first;
}

let count = [1, 2, 3];
console.log(shift(count));
console.log(count);