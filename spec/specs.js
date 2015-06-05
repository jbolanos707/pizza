describe('Pizza', function(){
  it("has type and size", function(){
    var newPizza = new Pizza("cheese", "medium");
    expect(newPizza.pizzaType).to.equal("cheese");
    expect(newPizza.pizzaSize).to.equal("medium");
  });
});
