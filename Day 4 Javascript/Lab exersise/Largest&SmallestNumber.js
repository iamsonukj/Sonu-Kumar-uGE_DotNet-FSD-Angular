let numbers = [12, 45, 2, 78, 34];
let largest = numbers[0];
let smallest = numbers[0];

for (let n of numbers) {
  if (n > largest) largest = n;
  if (n < smallest) smallest = n;
}

console.log("Largest:", largest);
console.log("Smallest:", smallest);

