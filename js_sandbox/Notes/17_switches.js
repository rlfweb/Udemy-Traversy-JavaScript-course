// SWITCHES
// Another way of testing conditions
// Does exactly what if/else statements do
// A switch is neater than having lots of if/else statements

let colour = "red";

switch (colour) {
  // inside a switch you want to define different cases

  case "red":
    console.log("Colour is red");
    break;

  case "blue":
    console.log("Colour is blue");
    break;

  default:
    console.log("Colour is not red or blue");
    break;
}
// outputs Colour is red

// same code as above but colour is changed to blue
colour = "blue";

switch (colour) {
  // inside a switch you want to define different cases

  case "red":
    console.log("Colour is red");
    break;

  case "blue":
    console.log("Colour is blue");
    break;

  default:
    console.log("Colour is not red or blue");
    break;
}
// outputs Colour is Blue

// same code as above but colour is changed to yellow
colour = "yellow";

switch (colour) {
  // inside a switch you want to define different cases

  case "red":
    console.log("Colour is red");
    break;

  case "blue":
    console.log("Colour is blue");
    break;

  default:
    console.log("Colour is not red or blue");
    break;
}
// outputs Colour is not red or blue


// A switch for the date (first line is JS for getting the correct date and day)
switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";
    break;
}
console.log(`Today is ${day}`);
// outputs Today is Monday (which is actually is in real life)
