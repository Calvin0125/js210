function buyFruit(list) {
  let result = [];
  list.forEach(item => {
    for (let i = 0; i < item[1]; i++) {
      result.push(item[0]);
    }
  });

  return result;
}

console.log(buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]));