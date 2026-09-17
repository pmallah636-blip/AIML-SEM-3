class BankAccount {

    constructor(accountNo, holderName, balance) {
        this.accountNo = accountNo;
        this.holderName = holderName;
        this.balance = balance;
    }

    deposit(amount) {
        this.balance += amount;
        console.log("Deposited: ₹"+ amount);
    }

    
    withdraw(amount) {
        if (amount > this.balance) {
            console.log("Insufficient balance! Withdrawal not allowed.");
        } else {
            this.balance -= amount;
            console.log("Withdrawn: ₹" + amount);
        }
    }

    
    displayBalance() {
        console.log("Account No:", this.accountNo);
        console.log("Holder Name:", this.holderName);
        console.log("Balance: ₹" + this.balance);
        console.log("------------------------");
    }

   
    static bankInfo() {
        console.log("Bank Name: ABC Bank");
        console.log("Banking Information: Safe and secure banking services.");
        console.log("Services: Deposit, Withdrawal and Account Management");
        console.log("------------------------");
    }
}



BankAccount.bankInfo();


let account1 = new BankAccount(101, "ashu", 10000);
let account2 = new BankAccount(102, "rammy", 5000);



console.log("Account 1 Transactions");
 account1.deposit(2000);
  account1.withdraw(3000);
   account1.displayBalance();

console.log("Account 2 Transactions");

account2.deposit(10000);
account2.withdraw(70000);   
account2.displayBalance();