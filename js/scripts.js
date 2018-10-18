var price = 10;
var discountPrice = 8;

function Ticket(movie, time, age, price) {
  this.movie = movie;
  this.time = time;
  this.age = age;
  // var price = 10;
  //   if (movieDiscount === true) {
  //     this.price = price - 1;
  //   };
  //   if (timeDiscount === true) {
  //     this.price = price - 1;
  //   };
  //   if (ageDiscount === true) {
  //     this.price = price - 1;
  //   };
  this.price = price;
};



Ticket.prototype.finalPrice = function() {
    if (this.movie === "old" || this.time === "matinee" || this.age >= 65) {
      return this.price = discountPrice;
    } else {
      return this.price = price;
    }
  };
//   var timeDiscount = function() {
//     if (this.time === "matinee") {
//       return true;
//     } else {
//       return false;
//     };
//   };
//   var ageDiscount = function() {
//     if (age >= 65) {
//       return true;
//     } else {
//       return false;
//     };
//   };
//
//   var price = 10;
//     if (movieDiscount() === true) {
//       price = price - 1;
//     };
//     if (timeDiscount() === true) {
//       price = price - 1;
//     };
//     if (ageDiscount() === true) {
//       price = price - 1;
//     };
//   return price;
// };



$(document).ready(function() {
  $("form#tickets-form").submit(function(event) {
    event.preventDefault();
    var movie = $("#movies").val();
    var time = $("#times").val();
    var age = parseInt($("input#age").val());
    var newTicket = new Ticket(movie, time, age, price);
    console.log(newTicket)
    $(".price").text(newTicket.finalPrice());
    $("#price-box").show();

  });
});
