let salaries = [25000, 30000, 28000, 35000];
let sum = 0;

for (let s of salaries) sum += s;

let avg = sum / salaries.length;

console.log("Total Salary:", sum);
console.log("Average Salary:", avg);
console.log("Above Average Salaries:");

for (let s of salaries) {
  if (s > avg) console.log(s);
}
