function fibonacci(n) {
  if (n < 3) {
    return 1;
  }

  let first = 1;
  let second = 1;
  let current = 2;
  for (let i = 4; i <= n; i++) {
    first = second;
    second = current;
    current = first + second;
  }

  return current;
}

console.log(fibonacci(20));       // 6765
console.log(fibonacci(50));       // 12586269025
console.log(fibonacci(75));       // 2111485077978050