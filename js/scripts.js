function BankAccount(userName, initialDeposit, balance) {
  this.userName = userName;
  this.initialDeposit = initialDeposit;
  this.balance = balance;
}

BankAccount.prototype.withdrawal = function(amount) {
  return this.initialDeposit - amount;
}

BankAccount.prototype.deposit = function(amount) {
  return this.initialDeposit + amount;
}


$(document).ready(function() {
  var userName = $("input.name").val();
  var initialDeposit = $("input.initialDeposit").val();
});
