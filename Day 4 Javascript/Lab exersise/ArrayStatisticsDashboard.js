let arr = [10, 15, 20, 25, 30];
let sumArr = 0,
  even = 0,
  odd = 0;

for (let n of arr) {
  sumArr += n;
  if (n % 2 === 0) even++;
  else odd++;
}

console.log("Sum:", sumArr);
console.log("Average:", sumArr / arr.length);
console.log("Even Count:", even);
console.log("Odd Count:", odd);
