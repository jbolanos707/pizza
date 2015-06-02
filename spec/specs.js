describe('bankAccount', function(){
  it("creates a new bank account with a name and initial deposit", function(){
    var newAccount = new BankAccount("Joe Shmoe", 500);
    expect(newAccount.accountHolder).to.equal("Joe Shmoe");
    expect(newAccount.balance).to.equal(500);
  });

  it("adds withdrawl method to bank account", function() {
    var newAccount = new BankAccount("Joe Shmoe", 500);
    newAccount.withdrawl(200);
    expect(newAccount.balance).to.equal(300);
  });

  it("adds deposit method to bank account", function(){
    var newAccount = new BankAccount("Joe Shmoe", 500);
    newAccount.deposit(200);
    expect(newAccount.balance).to.equal(700);
  });
});
