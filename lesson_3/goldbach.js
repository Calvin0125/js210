function isPrime(num) {
  if (num < 2) {
    return false;
  }

  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}

function checkGoldbach(num) {
  if (num < 4) {
    console.log(null);
  }

  for (let i = 2; i <= (num / 2); i++) {
    for (let j = 2; j <= (num - 2); j++) {
      if (i + j > num) {
        break;
      }

      if (
           (isPrime(i) && isPrime(j)) &&
           (i + j === num)
      ) {
        console.log(`${i} ${j}`);
      }
    }
  }
}

checkGoldbach(3);
checkGoldbach(4);
checkGoldbach(12);
checkGoldbach(100);