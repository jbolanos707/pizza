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
  it("initializes order", function() {
    var testOrder = new Order();
    expect(testOrder.pizzas).to.eql([]);
  });

  it("adds pizza/s to an order", function() {
    var testPizza = new Pizza("small", ["pepporini", "mushrooms"]);
    var testOrder = new Order(testPizza);
    testOrder.addPizza(testPizza);
    expect(testOrder.pizzas).to.eql([testPizza]);
  });
});
