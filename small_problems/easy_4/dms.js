let Decimal = require('decimal.js');
const DEGREE = "\xB0";

function padZero(num) {
  num = String(num);
  if (num.length > 1) {
    return num;
  } else {
    return '0' + num;
  }
}

function dms(angle) {
  let degrees = Math.floor(angle);
  let minutesSeconds = new Decimal(angle).mod(1);
  let minutes = Math.floor(Number(minutesSeconds.times(60)));
  let seconds = Number(minutesSeconds.times(60).mod(1).times(60).round(0));
  return `${degrees}${DEGREE}${padZero(minutes)}'${padZero(seconds)}"`;
}

console.log(dms(30));           // 30°00'00"
console.log(dms(76.73));        // 76°43'48"
console.log(dms(254.6));        // 254°35'59"
console.log(dms(93.034773));    // 93°02'05"
console.log(dms(0));            // 0°00'00"
console.log(dms(360));          // 360°00'00" or 0°00'00"