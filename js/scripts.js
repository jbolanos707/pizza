function Pizza(pizzaSize, toppings) {
  this.pizzaSize = pizzaSize;
  this.toppings = toppings;
};

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
}

Order.prototype.totalCost = function() {
  var totalCost = 0
  for(var i=0; i< this.pizzas.length; i++) {
    totalCost += this.pizzas[i].pizzaPrice();
  }
  return totalCost;
}








// $(document).ready(function(){
//
// $("form#movie1").submit(function(event) {
//   event.preventDefault();
//   var movieName = $('#movie1-title').text;
//   var movieTime = $('select#movie1-time option:selected').val();
//   var ticketPrice = 12;
//   debugger;
//
//   newTicket = new Ticket(movieName, movieTime, ticketPrice);
//   if ($("input#movie1-senior").checked){
//     newTicket.seniorDiscount();
//   }
//   else if (newTicket.movieTime ==="11:00am"){
//     newTicket.matineeDiscount();
//   }
//
//   $("#ticket-info").text("Your ticket for " + newTicket.movieName + " at " + newTicket.movieTime + "will cost $ " + newTicket.ticketPrice);
//
// });
//
// });
