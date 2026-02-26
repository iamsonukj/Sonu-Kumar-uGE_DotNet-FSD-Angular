class BankAccount {
  constructor(accountHolder, balance) {
    this.accountHolder = accountHolder;
    this.balance = balance;
  }
  deposit(amount) {
    if (amount > 0) {
      this.balance += amount;
      console.log(" " + amount + " deposit has done");
    } else {
      console.log("Deposit amount must be positive.");
    }
  }
  withdraw(amount) {
    if (amount > this.balance) {
      console.log("insufficient balance");
    } else if (amount <= 0) {
      console.log("Withdrawal amount must be positive.");
    } else {
      this.balance -= amount;
      console.log(" " + amount + " withdrawn successfully.");
    }
  }
  checkBalance() {
    console.log("Current Balance: " + this.balance);
  }
}
let account = new BankAccount("RAJESH", 5000);
account.checkBalance();
account.deposit(2000);
account.withdraw(3000);
account.withdraw(6000);
account.checkBalance();