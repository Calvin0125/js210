function join(array, separator) {
  let string = ''
  for (let i = 0; i < array.length - 1; i++) {
    string += array[i];
    string += separator;
  }

  return string += array[array.length - 1];
}

console.log(join(['bri', 'tru', 'wha'], 'ck '));       // 'brick truck wha'
console.log(join([1, 2, 3], ' and '));                 // '1 and 2 and 3'