function BankAccount(accountHolder, balance) {

  this.accountHolder = accountHolder;
  this.balance = balance;

}

BankAccount.prototype.withdrawl = function(){
  var inputtedWithdrawl = parseInt($("input#withdrawl-amount").val());
  this.balance -= inputtedWithdrawl;
};

BankAccount.prototype.deposit = function(){
  var inputtedDeposit = parseInt($("input#deposit-amount").val());
  this.balance += inputtedDeposit;
};

$(document).ready(function() {

  $("form#newAccount").submit(function(event) {
    event.preventDefault();

    var inputtedFullName = $("input#full-name").val();
    var inputtedInitialDeposit = parseInt($("input#initial-deposit").val());
    var newAccount = new BankAccount(inputtedFullName, inputtedInitialDeposit);

    $("#account-holder").text(newAccount.accountHolder);
    $("#account-balance").text("$ " + newAccount.balance);

      $("#new-account").hide();
      $("#account-info").show();

    $("form#deposit").submit(function(event) {
      event.preventDefault();

      newAccount.deposit();
      $("#account-balance").text("$ " + newAccount.balance);

      $("input#deposit-amount").val("");

    });


    $("form#withdrawl").submit(function(event) {
      event.preventDefault();

      newAccount.withdrawl();
      $("#account-balance").text("$ " + newAccount.balance);

      $("input#withdrawl-amount").val("");
    });


  });
});
