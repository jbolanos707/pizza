describe('ticket', function(){
  it("displays movie title and time", function(){
    var newTicket = new Ticket("True Cost", "11:00am", 12);
    expect(newTicket.movieTitle).to.equal("True Cost");
    expect(newTicket.movieTime).to.equal("11:00am");
    expect(newTicket.ticketPrice).to.equal(12);
  });

  it("discounts the ticket price for seniors", function() {
    var newTicket = new Ticket("True Cost", "11:00am", 12);
    newTicket.seniorDiscount();
    expect(newTicket.ticketPrice).to.equal(6);
  });

  it("discounts the ticket price for matinee", function() {
    var newTicket = new Ticket("True Cost", "11:00am", 12);
    newTicket.matineeDiscount();
    expect(newTicket.ticketPrice).to.equal(10);
  });
});
