function slice(array, start, end) {
  let subArr = [];
  let arrayIndex = start;
  end = end > array.length ? array.length : end;
  while (arrayIndex < end) {
    subArr.push(array[arrayIndex]);
    arrayIndex += 1;
  }

  return subArr;
}

console.log(slice([1, 2, 3], 1, 2));               // [2]
console.log(slice([1, 2, 3], 2, 0));               // []
console.log(slice([1, 2, 3], 5, 1));               // []
console.log(slice([1, 2, 3], 0, 5));               // [1, 2, 3]

const arr1 = [1, 2, 3];
console.log(slice(arr1, 1, 3));                     // [2, 3]
console.log(arr1);                                  // [1, 2, 3]

function splice(array, start, deleteCount, ...elements) {
  let originalLength = array.length;
  let removed = array.slice(start, start + deleteCount);
  let arrIndex = start
  let elementsIndex = 0;
  while (arrIndex < start + deleteCount) {
    if (elementsIndex < elements.length) {
      array[arrIndex] = elements[elementsIndex];
      elementsIndex += 1;
      arrIndex += 1;
    } else {
      array[arrIndex] = array[arrIndex + deleteCount - elements.length]
      arrIndex += 1;
    }

  }


  while (elementsIndex < elements.length) {
    for (let index = array.length; index > arrIndex; index--) {
      array[index] = array[index - 1]
    }

    array[arrIndex] = elements[elementsIndex];
    arrIndex += 1;
    elementsIndex += 1;
  }
  
  array.length = originalLength - removed.length + elements.length;
  return removed;
}

console.log(splice([1, 2, 3], 1, 2));              // [2, 3]
console.log(splice([1, 2, 3], 1, 3));              // [2, 3]
console.log(splice([1, 2, 3], 1, 0));              // []
console.log(splice([1, 2, 3], 0, 1));              // [1]
console.log(splice([1, 2, 3], 1, 0, 'a'));         // []

const arr2 = [1, 2, 3];
console.log(splice(arr2, 1, 1, 'two'));             // [2]
console.log(arr2);                                  // [1, "two", 3]

const arr3 = [1, 2, 3];
console.log(splice(arr3, 1, 2, 'two', 'three'));    // [2, 3]
console.log(arr3);                                  // [1, "two", "three"]

const arr4 = [1, 2, 3];
console.log(splice(arr4, 1, 0));                    // []
console.log(splice(arr4, 1, 0, 'a'));               // []
console.log(arr4);                                  // [1, "a", 2, 3]

const arr5 = [1, 2, 3];
console.log(splice(arr5, 0, 0, 'a'));               // []
console.log(arr5);                                  // ["a", 1, 2, 3]