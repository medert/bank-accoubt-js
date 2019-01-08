class BankAccount {
  constructor(balance){
    this.initialBalanace = balance || 0;
    this.bills = [];
  }

  printBalance(){
    console.log(this.initialBalanace);
  }

  printBills(){
    console.log(this.bills);
  }

  addTransaction(transaction){
    this.initialBalanace += transaction;
    this.bills.push(transaction);
  }

}

let account = new BankAccount(1000);

account.printBalance();
account.addTransaction(45);
account.addTransaction(-99.95);
account.addTransaction(-34.43);
account.printBalance();
account.printBills();
