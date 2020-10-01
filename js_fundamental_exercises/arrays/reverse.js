function reverse(input) {
  let reversed = [];
  let arrayOutput;
  if (Array.isArray(input)) {
    arrayOutput = true;
  } else if (typeof(input) === 'string') {
    input = input.split('')
    arrayOutput = false;
  } else {
    return;
  }

  input.forEach(element => reversed.unshift(element));
  return arrayOutput ? reversed : reversed.join('');
}

console.log(reverse('Hello'));           // "olleH"
console.log(reverse('a'));               // "a"
console.log(reverse([1, 2, 3, 4]));      // [4, 3, 2, 1]
console.log(reverse([]));                // []

const array = [1, 2, 3];
console.log(reverse(array));             // [3, 2, 1]
console.log(array);                      // [1, 2, 3]