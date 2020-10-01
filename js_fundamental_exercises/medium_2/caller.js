function makeDoubler(caller) {
  function doubler(number) {
    console.log(`This function was called by ${caller}.`);
    return number * 2;
  }

  return doubler;
}

const doubler = makeDoubler('Victor');
let result = doubler(5);
console.log(result);