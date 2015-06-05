describe('Pizza', function() {
  it("has type, size, and base price", function() {
    var newPizza = new Pizza("cheese", "medium", 20);
    expect(newPizza.pizzaType).to.equal("cheese");
    expect(newPizza.pizzaSize).to.equal("medium");
    expect(newPizza.basePrice).to.equal(20)
  });
});
