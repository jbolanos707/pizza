describe('Pizza', function() {
  it("has type, size, and base price", function() {
    var newPizza = new Pizza("cheese", "medium", 20);
    expect(newPizza.pizzaType).to.equal("cheese");
    expect(newPizza.pizzaSize).to.equal("medium");
    expect(newPizza.basePrice).to.equal(20);
  });
});

describe('Topping', function() {
  it("has type and price", function() {
    var newTopping = new Topping("sausage", 1);
    expect(newTopping.toppingType).to.equal("sausage");
    expect(newTopping.toppingPrice).to.equal(1);
  });
});

describe('Order', function() {
  it("includes quantity, pizza type, and size, and topping selection", function() {
    var newPizza = new Pizza("cheese", "medium");
    var newTopping = new Topping("sausage");
    var newOrder = new Order(1, newPizza, newTopping);
    expect(newOrder.quantity).to.equal(1);
    expect(newOrder.pizzaType).to.equal("cheese");
    expect(newOrder.pizzaSize).to.equal("medium");
    expect(newOrder.toppingType).to.equal("sausage");
  });
});
