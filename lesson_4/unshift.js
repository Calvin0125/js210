function unshift(array, element) {
  for (let i = array.length; i > 0; i--) {
    array[i] = array[i - 1]
  }
  array[0] = element;
  return array.length;
}

let count = [1, 2, 3];
console.log(unshift(count, 0));
console.log(count);