function greetings(nameArray, jobObject) {
  let fullName = nameArray.join(' ');
  console.log(`Hello, ${fullName}! Nice to have a ${jobObject.title} ${jobObject.occupation} around.`);
}

greetings(['John', 'Q', 'Doe'], {title: 'Master', occupation: 'Plumber'});