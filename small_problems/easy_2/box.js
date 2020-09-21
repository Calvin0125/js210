function logInBox(string) {
  let border = `+${'-'.repeat(string.length + 2)}+`;
  let padding = `|${' '.repeat(string.length + 2)}|`;
  console.log(border);
  console.log(padding);
  console.log(`| ${string} |`);
  console.log(padding);
  console.log(border);
}

logInBox('To boldly go where no one has gone before.');
logInBox('');