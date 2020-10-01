function concat(array1) {
  let newArr = array1.slice();
  for (let argIndex = 1; argIndex < arguments.length; argIndex++) {
    if (!Array.isArray(arguments[argIndex])) {
      arguments[argIndex] = [arguments[argIndex]];
    }

    arguments[argIndex].forEach(element => newArr.push(element));
  }

  return newArr;
}


console.log(concat([1, 2, 3], [4, 5, 6], [7, 8, 9]));    // [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(concat([1, 2], 'a', ['one', 'two']));        // [1, 2, "a", "one", "two"]
console.log(concat([1, 2], ['three'], 4));               // [1, 2, "three", 4]