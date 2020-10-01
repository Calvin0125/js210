function incrementProperty(object, property) {
  if (Object.keys(object).includes(property)) {
    object[property]++;
  } else {
    object[property] = 1;
  }

  return object[property];
}

let wins = {
  steve: 3,
  susie: 4,
};

console.log(incrementProperty(wins, 'susie'));
console.log(wins);
console.log(incrementProperty(wins, 'lucy'));
console.log(wins);
