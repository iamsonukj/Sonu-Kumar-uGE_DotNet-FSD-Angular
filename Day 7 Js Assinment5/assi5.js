class Employee {
  constructor(name, salary) {
    this.name = name;
    this.salary = salary;
  }
    getDetails() {
    console.log("Name:", this.name);
    console.log("Salary:", this.salary);
  }
}
class Manager extends Employee {
  constructor(name, salary, bonus) {
    super(name, salary);
    this.bonus = bonus;
  }
  getTotalSalary() {
    return this.salary + this.bonus;
  }
}
class Director extends Manager {
  constructor(name, salary, bonus, stockOptions) {
    super(name, salary, bonus);
    this.stockOptions = stockOptions;
  }
  getFullCompensation() {
    return this.salary + this.bonus + this.stockOptions;
  }
}
let d1 = new Director("RAJESH", 50000, 10000, 20000);
d1.getDetails();
console.log("total Salary manager:", d1.getTotalSalary());
console.log("full Compensation DIR:", d1.getFullCompensation());