function binarySearch(array, search) {
  let middleIndex = Math.floor(array.length / 2);
  let min = 0;
  let max = array.length - 1;
  while (true) {
    let middle = array[middleIndex];
    if (middle === search) {
      return middleIndex;
    } else if (min > max) {
      return -1;
    } else if (search > middle) {
      min = middleIndex + 1;
      middleIndex = Math.floor((min + max) / 2);
    } else {
      max = middleIndex - 1;
      middleIndex = Math.floor((min + max) / 2);
    }
  }
}

const yellowPages = ['Apple Store', 'Bags Galore', 'Bike Store', 'Donuts R Us', 'Eat a Lot', 'Good Food', 'Pasta Place', 'Pizzeria', 'Tiki Lounge', 'Zooper'];
console.log(binarySearch(yellowPages, 'Pizzeria'));                   // 7
console.log(binarySearch(yellowPages, 'Apple Store'));                // 0

console.log(binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 77));    // -1
console.log(binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 89));    // 7
console.log(binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 5));     // 1

console.log(binarySearch(['Alice', 'Bonnie', 'Kim', 'Pete', 'Rachel', 'Sue', 'Tyler'], 'Peter'));  // -1
console.log(binarySearch(['Alice', 'Bonnie', 'Kim', 'Pete', 'Rachel', 'Sue', 'Tyler'], 'Tyler'));  // 6