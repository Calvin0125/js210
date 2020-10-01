function shift(array) {
  let first = array[0];
  for (let i = 0; i < array.length - 1; i++) {
    array[i] = array[i + 1]
  }
  
  array.length = array.length - 1 > 0 ? array.length - 1 : 0;
  return first;
}

function unshift(array) {
  for (let argIndex = 1; argIndex < arguments.length; argIndex++) {
    for (let i = array.length; i > 0; i--) {
      array[i] = array[i - 1]
    }
    array[0] = arguments[argIndex];
  }
  return array.length;
}

console.log(shift([1, 2, 3]));                // 1
console.log(shift([]));                       // undefined
console.log(shift([[1, 2, 3], 4, 5]));        // [1, 2, 3]

console.log(unshift([1, 2, 3], 5, 6));        // 5
console.log(unshift([1, 2, 3]));              // 3
console.log(unshift([4, 5], [1, 2, 3]));      // 3

const testArray = [1, 2, 3];
console.log(shift(testArray));                // 1
console.log(testArray);                       // [2, 3]
console.log(unshift(testArray, 5));           // 3
console.log(testArray);                       // [5, 2, 3]