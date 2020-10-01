function diamond(n) {
  for (let i = 1; i <= n; i += 2) {
    let spaces = (n - i) / 2;
    console.log(`${' '.repeat(spaces)}${'*'.repeat(i)}${' '.repeat(spaces)}`);
  }

  for (let i = (n - 2); i >= 1; i -= 2) {
    let spaces = (n - i) / 2;
    console.log(`${' '.repeat(spaces)}${'*'.repeat(i)}${' '.repeat(spaces)}`);
  }
}

diamond(1);
diamond(3);
diamond(9);