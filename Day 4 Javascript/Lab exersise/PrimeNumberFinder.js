let start = 1,
  end = 20,
  count = 0;

for (let i = start; i <= end; i++) {
  if (i < 2) continue;
  let prime = true;

  for (let j = 2; j <= Math.sqrt(i); j++) {
    if (i % j === 0) {
      prime = false;
      break;
    }
  }

  if (prime) {
    console.log(i);
    count++;
  }
}

console.log("Total Primes:", count);
