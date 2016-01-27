function BankAccount(userName, initialDeposit) {
  this.userName = userName;
  this.initialDeposit = initialDeposit;
}

BankAccount.prototype.withdrawal = function(amount) {
  return this.initialDeposit - amount;
}

BankAccount.prototype.deposit = function(amount) {
  return this.initialDeposit + amount;
}
