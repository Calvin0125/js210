const BLOCKS = ['BO', 'XK', 'DQ', 'CP', 'NA', 'GT', 'RE', 'FS', 'JW', 'HU', 'VI', 'LY', 'ZM'];

function isBlockWord(word) {
  let blocks = BLOCKS.slice();
  let blockWord = true;
  word.split('').forEach(char => {
    let length = blocks.length;
    blocks = blocks.filter(block => !block.match(char.toUpperCase()));
    if (length === blocks.length) {
      blockWord = false;
    }
  });

  return blockWord;
}

console.log(isBlockWord('BATCH'));
console.log(isBlockWord('BUTCH'));
console.log(isBlockWord('jest'));