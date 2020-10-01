function concat(array1, arg2) {
  if (!Array.isArray(arg2)) {
    arg2 = [arg2];
  }

  let newArr = array1.slice();
  arg2.forEach(element => newArr.push(element));
  return newArr;

}

const obj = { a: 2, b: 3 };
const newArray = concat([2, 3], obj);
console.log(newArray);                              // [2, 3, { a: 2, b: 3 }]
obj.a = 'two';
console.log(newArray);                              // [2, 3, { a: "two", b: 3 }]

const arr1 = [1, 2, 3];
const arr2 = [4, 5, obj];
const arr3 = concat(arr1, arr2);
console.log(arr3);                                  // [1, 2, 3, 4, 5, { a: "two", b: 3 }]
obj.b = 'three';
console.log(arr3);                                  // [1, 2, 3, 4, 5, { a: "two", b: "three" }]

arr3[5].b = 3;                         // or, `arr3[5]['b'] = 3;`
console.log(obj);                                   // { a: "two", b: 3 }

let testArr1 = [1, 2, obj];
let testArr2 = [3, 4, 5];
let testArr3 = concat(testArr1, testArr2);
console.log(testArr3);
obj.b = 'three';
console.log(testArr3);