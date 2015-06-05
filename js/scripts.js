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
debugger;
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

// function Topping(toppingType, toppingPrice) {
//   this.toppingType = toppingType;
//   this.toppingPrice = toppingPrice;
// };
//
// function Order(quantity, pizza, topping) {
//   this.quantity = quantity;
//   this.pizzaType = pizza.pizzaType;
//   this.pizzaSize = pizza.pizzaSize;
//   this.toppingType = topping.toppingType;
// };
//   var pizzaCost = 0;
// // };
// //
// // // Pizza.prototype.sizePrice = function(size) {
// // //   this.size = size;
//
//   if(pizzaSize === "small") {
//     pizzaPrice += 10;
//   } else if (pizzaSize === "medium") {
//     pizzaPrice += 20;
//   } else (pizzaSize === "large") {
//     pizzaPrice += 30;
//   };
// };

// function Topping(toppingType, toppingPrice) {
//   this.toppingType = toppingType;
//   this.toppingPrice = toppingPrice;
// };
//
// function Order(quantity, pizza, topping) {
//   this.quantity = quantity;
//   this.pizzaType = pizza.pizzaType;
//   this.pizzaSize = pizza.pizzaSize;
//   this.toppingType = topping.toppingType;
// };
//
// Order.prototype.price = function() {
//   var pizzaPrice = 0;
//   var sizeArray = ["small", "medium", "large"];
//
//   if (this.pizzaSize = sizeArray[0]) {
//     pizzaPrice += 10;
//   }
//   else if (this.pizzaSize = sizeArray[1]) {
//     pizzaPrice += 20;
//   }
//   else (this.pizzaSize) {
//     pizzaPrice += 30;
//   }
//
//   var toppingPrice = 1;
//
//   if (this.toppingType)
// };





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
