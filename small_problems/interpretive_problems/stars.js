function printTop(n) {
  let innerSpaces = (n - 3) / 2;
  let outerSpaces = 0;
  let rows = (n - 1) / 2;
  for (let i = rows; i > 0; i--) {
    console.log(`${' '.repeat(outerSpaces)}*${' '.repeat(innerSpaces)}*${' '.repeat(innerSpaces)}*${' '.repeat(outerSpaces)}`);
    outerSpaces += 1;
    innerSpaces -= 1;
  }
}

function printMiddle(n) {
  console.log('*'.repeat(n));
}

function printBottom(n) {
  let innerSpaces = 0;
  let outerSpaces = (n - 3) / 2;
  let rows = (n - 1) / 2;
  for (let i = rows; i > 0; i--) {
    console.log(`${' '.repeat(outerSpaces)}*${' '.repeat(innerSpaces)}*${' '.repeat(innerSpaces)}*${' '.repeat(outerSpaces)}`);
    outerSpaces -= 1;
    innerSpaces += 1;
  }
}

function star(n) {
  printTop(n);
  printMiddle(n);
  printBottom(n);
}

star(7);
star(9);
star(21);