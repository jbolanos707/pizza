describe('Pizza', function() {
  it("has size and toppings", function() {
    var testPizza = new Pizza("small", ["pepporini", "mushrooms"]);
    expect(testPizza.pizzaSize).to.equal("small");
    expect(testPizza.toppings).to.eql(["pepporini", "mushrooms"]);
  });

  it("calculates cost of pizza", function() {
    var testPizza = new Pizza("small", ["pepporini", "mushrooms"]);
    expect(testPizza.pizzaPrice()).to.equal(12);
  });
});

describe('Order', function() {
  it("contains pizza selection", function() {
    var testPizza = new Pizza("small", ["pepporini", "mushrooms"]);
    var testOrder = new Order(newPizza);
    expect(testOrder.pizzas).to.eql([newPizza]);
  });
});
