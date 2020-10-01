function countOccurrences(array) {
  array = array.slice().sort();
  let count = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i + 1] !== array[i]) {
      count += 1;
      console.log(`${array[i]} => ${count}`);
      count = 0;
    } else {
      count += 1;
    }
  }
}

const vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
                'motorcycle', 'motorcycle', 'car', 'truck'];

countOccurrences(vehicles);