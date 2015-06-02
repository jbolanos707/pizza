function BankAccount(accountHolder, balance) {
  this.accountHolder = accountHolder;
  this.balance = balance;
}

BankAccount.prototype.withdrawl = function(withdrawlAmount){
  return this.balance -= withdrawlAmount;
}

BankAccount.prototype.deposit = function(depositAmount){
  return this.balance += depositAmount;
}
