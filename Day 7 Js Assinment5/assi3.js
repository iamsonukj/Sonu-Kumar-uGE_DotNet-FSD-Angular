class Student {
  constructor(name) {
    this.name = name;
    this.marks = [];
  }
  addMark(mark) {
    this.marks.push(mark);
  }
  getAverage() {
    let total = 0;

    for (let i = 0; i < this.marks.length; i++) {
      total += this.marks[i];
    }
    return total / this.marks.length;
  }
  getGrade() {
    let avg = this.getAverage();
    if (avg >= 90) { return "A";} 
    else if (avg >= 75) { return "B";}
    else if (avg >= 50) { return "C";}
     else { return "Fail";
    }
  }
}
let s1 = new Student("ROY");
s1.addMark(85);
s1.addMark(90);
s1.addMark(80);
console.log("Student Name:", s1.name);
console.log("Average Marks:", s1.getAverage());
console.log("Grade:", s1.getGrade());