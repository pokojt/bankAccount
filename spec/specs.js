describe ('BankAccount', function() {
  it("allows users to create a bank account with an initial deposit", function() {
    var testAccount = new BankAccount("Steve", 500);
    expect(testAccount.userName).to.equal("Steve");
    expect(testAccount.initialDeposit).to.equal(500);
  });

  it("adds the withdrawal and deposit methods to any account", function() {
    var testAccount = new BankAccount("Steve", 500);
    expect(testAccount.withdrawal(100)).to.equal(400);
    expect(testAccount.deposit(100)).to.equal(600);
  });
});
