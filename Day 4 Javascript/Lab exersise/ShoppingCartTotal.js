let prices = [400, 350, 300, 200];
let totalBill = 0;

for (let p of prices) {
  totalBill += p;
}

if (totalBill > 1000) {
  totalBill -= totalBill * 0.1;
}

console.log("Final Bill:", totalBill);
