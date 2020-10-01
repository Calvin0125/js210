let myArray = [1, 2, 3, 4];
const myOtherArray = myArray.slice(0);

myArray.pop();
console.log(myOtherArray);

myArray = [1, 2];
console.log(myOtherArray);