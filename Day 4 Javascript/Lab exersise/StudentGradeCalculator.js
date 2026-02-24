let marks = [85, 90, 78, 88, 92];
let total = 0;

for (let m of marks) {
  total += m;
}

let average = total / marks.length;
let grade;

if (average >= 90) grade = "A";
else if (average >= 75) grade = "B";
else if (average >= 60) grade = "C";
else grade = "Fail";

console.log("Total:", total);
console.log("Average:", average);
console.log("Grade:", grade);
