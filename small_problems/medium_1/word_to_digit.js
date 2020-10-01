const NUMBER_WORDS = { zero: '0',
                       one: '1',
                       two: '2',
                       three: '3',
                       four: '4',
                       five: '5',
                       six: '6',
                       seven: '7',
                       eight: '8',
                       nine: '9', }

const NUM_REGEX = /(one|two|three|four|five|six|seven|eight|nine|zero)/ig;

function wordToDigit(string) {
  return string.replace(NUM_REGEX, match => NUMBER_WORDS[match]);
}

console.log(wordToDigit('Please call me at five five five one two three four. Thanks.'));
