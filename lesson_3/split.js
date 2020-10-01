function splitString(string, delimiter) {
  if (typeof(delimiter) === 'undefined') {
    console.log("ERROR: No delimiter");
    return;
  }

  let section = '';
  for (let i = 0; i < string.length; i++) {
    if (string[i] === delimiter) {
      console.log(section);
      section = '';
    } else {
      section += string[i];
      if (delimiter === '') {
        console.log(section);
        section = '';
      }
    }

    if ((i === string.length - 1) && (section)) {
      console.log(section);
    }
  }
}

splitString('abc,123,hello world', ',');
// logs:
// abc
// 123
// hello world

splitString('hello');
// logs:
// ERROR: No delimiter

splitString('hello', '');
// logs:
// h
// e
// l
// l
// o

splitString('hello', ';');
// logs:
// hello

splitString(';hello;', ';');
// logs:
//  (this is a blank line)
// hello