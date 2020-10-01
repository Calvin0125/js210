function random(min, max) {
  if (min > max) {
    [min, max] = [max, min];
  }

  return Math.floor(Math.random() * (max - min + 1) + min);
}

console.log(random(1, 20));
console.log(random(20, 1));
console.log(random(15, 15));
console.log(random(3, 7));