let sales = [1200, 900, 1500, 800, 2000, 1700, 1100];
let totalSales = 0;
let best = sales[0],
  worst = sales[0];

for (let s of sales) {
  totalSales += s;
  if (s > best) best = s;
  if (s < worst) worst = s;
}

console.log("Total Sales:", totalSales);
console.log("Best Day Sale:", best);
console.log("Worst Day Sale:", worst);
