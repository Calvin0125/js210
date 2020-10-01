function gcd(a, b) {
  min = a < b ? a : b;
  for (let i = min; i > 0; i--) {
    if ((a % i === 0) && (b % i === 0)) {
      return i;
    }
  }
}