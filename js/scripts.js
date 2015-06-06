function Pizza(pizzaSize, toppings) {
  this.pizzaSize = pizzaSize;
  this.toppings = toppings;
}

Pizza.prototype.pizzaPrice = function() {
  var pizzaPrice = 0;

  if(this.pizzaSize === "small") {
    pizzaPrice += 10;
  } else if (this.pizzaSize === "medium") {
    pizzaPrice += 20;
  } else {
    pizzaPrice += 30;
  }

  pizzaPrice += (this.toppings.length);
  return pizzaPrice;
};

function Order() {
  this.pizzas = [];
}

Order.prototype.addPizza = function(pizza) {
  this.pizzas.push(pizza);
};

Order.prototype.totalCost = function() {
  var totalCost = 0;
  for(var i=0; i< this.pizzas.length; i++) {
    totalCost += this.pizzas[i].pizzaPrice();
  }
  return totalCost;
};



$(document).ready(function(){

  $("form#add-pizza").submit(function(event) {
    event.preventDefault();

    var order = new Order($("input#name").val());

    var checkedSize = $(this).find("input[type='checkbox'][name='size']:checked");
    var pizzaSize = [];
    var checkedToppings = $(this).find("input[type='checkbox'][name='topping']:checked");
    var toppings = [];

    checkedSize.each(function() {
      pizzaSize.push(this.value);
    });

    checkedtoppings.each(function() {
      toppings.push(this.value);
    });

    newPizza = new Pizza(pizzaSize, toppings);
    newOrder.addPizza;

    $("button#submit-order").on("click", function(event) {
      event.preventDefault();
    })

    $("#pizza-list").append(newPizza.pizzaSize + " pizza with " + newPizza.toppings + " $" + newPizza.pizzaPrice() + '<br>');
    $("#order").text("Your total for " + newOrder.pizzas.length + "pizzas is $" + newOrder.totalCost() +".");

    // $(".pizza-size input:checked").each(function() {
    //   this.checked = false;
    //
    // $(".toppings input:checked").each(function() {
    //   this.checked = false;
    });
  });
});
