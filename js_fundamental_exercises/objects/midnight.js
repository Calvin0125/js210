function padZero(num) {
  num = num.toString();
  return num.length > 1 ? num : '0' + num;
}

function timeOfDay(minutes) {
  let midnight = new Date(0);
  midnight.setUTCMinutes(minutes);
  let hour = midnight.getUTCHours();
  let minute = midnight.getUTCMinutes();
  return `${padZero(hour)}:${padZero(minute)}`;
}


console.log(timeOfDay(0));          // "00:00"
console.log(timeOfDay(-3));         // "23:57"
console.log(timeOfDay(35));         // "00:35"
console.log(timeOfDay(-1437));      // "00:03"
console.log(timeOfDay(3000));       // "02:00"
console.log(timeOfDay(800));        // "13:20"
console.log(timeOfDay(-4231));      // "01:29"

function afterMidnight(time) {
  let hour = Number(time.split(':')[0]);
  let minute = Number(time.split(':')[1]);
  let midnight = new Date(0);
  midnight.setUTCHours(hour);
  midnight.setUTCMinutes(minute);
  return midnight.getTime() / 1000 / 60;
}

console.log(afterMidnight('00:00'));
console.log(afterMidnight('12:34'));

function beforeMidnight(time) {
  let hour = Number(time.split(':')[0]);
  let minute = Number(time.split(':')[1]);
  hour = hour ? hour : 24;
  let midnight = new Date(Date.UTC(1969, 11, 31, hour, minute, 0));
  return Math.abs(midnight.getTime()) / 1000 / 60;
}

console.log(beforeMidnight('00:00'));
console.log(beforeMidnight('12:34'));