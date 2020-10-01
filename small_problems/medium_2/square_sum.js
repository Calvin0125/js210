function squareSum(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }

  return sum**2;
}

function sumSquare(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i**2;
  }

  return sum;
}

function sumSquareDifference(n) {
  return squareSum(n) - sumSquare(n);
}

console.log(sumSquareDifference(3));
console.log(sumSquareDifference(10));
console.log(sumSquareDifference(1));
console.log(sumSquareDifference(100));