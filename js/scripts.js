function Ticket(movie, time, age) {
  this.movie = movie;
  this.time = time;
  this.age = age;
  this.price = price;


var movieDiscount = function(movie) {
  if (movie === "old") {
    return true;
  } else {
    return false;
  };
};
function timeDiscount(time) {
  if (time ==== "matinee") {
    return true;
  } else {
    return false;
  };
};
function ageDiscount(age) {
  if (age >= 65) {
    return true;
  } else {
    return false;
  };
};
