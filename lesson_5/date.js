function dateSuffix(date) {
  date = String(date);
  if ((date >= 11) && (date <= 13)) {
    return date + 'th';
  } else if (date % 10 === 1) {
    return date + 'st';
  } else if (date % 10 === 2) {
    return date + 'nd';
  } else if (date % 10 === 3) {
    return date + 'rd';
  } else {
    return date + 'th'
  }
}

let daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
function logDay() {
  let today = new Date();
  let dayOfWeek = daysOfWeek[today.getDay()];
  let dayOfMonth = dateSuffix(today.getDate());
  let month = months[today.getMonth()];
  console.log( `Today's day is ${dayOfWeek}, ${month} ${dayOfMonth}`);
}

logDay();