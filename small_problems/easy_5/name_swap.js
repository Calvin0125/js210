function swapName(fullName) {
  return fullName.split(' ').reverse().join(', ');
}

console.log(swapName('Calvin Conley'));