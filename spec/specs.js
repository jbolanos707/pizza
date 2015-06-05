describe('Pizza', function(){
  it("has type, size, and topping", function(){
    var newPizza = new Pizza("cheese", "medium", "pepperoni");
    expect(newPizza.pizzaType).to.equal("cheese");
    expect(newPizza.pizzaSize).to.equal("medium");
    expect(newPizza.topping).to.equal("pepperoni")
  });
});
