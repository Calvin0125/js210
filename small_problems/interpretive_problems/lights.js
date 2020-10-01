function lightsOn(nSwitches) {
  let lights = [];
  for (let i = 0; i < nSwitches; i++) {
    lights.push(false);
  }

  lights.forEach((light, index) => {
    for (let i = index; i < lights.length; i += (index + 1)) {
      lights[i] = !lights[i];
    }
  });

  let on = [];
  lights.forEach((light, index) => {
    if (light) {
      on.push(index + 1);
    }
  });

  return on;
}

console.log(lightsOn(5));
console.log(lightsOn(100));