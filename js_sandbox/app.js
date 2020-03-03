// FUNCTION DECLARATIONS AND EXPRESSIONS

// Powerful tools
// Block of codes that can be defined and called at a later time 
// or defined and called at the same time

// FUNCTION DECLARATIONS

// NOT SO RECOMMENDED SYNTAX
function greet(){
  // anything within here is the function scope
  console.log('Hello');
}
// nothing is output here yet, because all we've done is declare the function
// We haven't called it yet. 

// This calls it, and so now we get the console log of Hello
greet();

//THIS BELOW IS RECOMMENDED SYNTAX
function greet(){
  return 'Hello';
}
console.log(greet());

// firstName is parameter or argument here
function greet(firstName){
  return 'Hello ' + firstName;
}
console.log(greet('John'));
// this puts in value of John to firstName


// YOU CAN HAVE MULTIPLE PARAMETERS
// firstName is parameter or argument here
function greet(firstName, lastName){
  return 'Hello ' + firstName + ' ' + lastName;
}
console.log(greet('John', 'Doe'));
// this outputs Hello John Doe


// YOU CAN HAVE MULTIPLE PARAMETERS

// firstName is parameter or argument here
function greet(firstName, lastName){
  return 'Hello ' + firstName + ' ' + lastName;
}
console.log(greet());
// this outputs Hello undefined undefined
// because that's what firstName and lastName are at the moment - they haven't been defined.


// THERE ARE WAYS TO HAVE DEFAULT VALUES FOR PARAMETERS

// PRIOR TO ES6
function greet2 (firstName) {
if (typeof firstName === 'undefined'){firstName = 'John'}
return 'Hello ' + firstName;
}
console.log(greet2());
// Had to do that for every parameter we wanted to default for
// outputs Hello John becuase although we didn't pass anything into the function, it defaults to John. 

console.log(greet('Steve', 'Smith'));
// outputs Hello Steve Smith as these values are overwriting the defaults. 

// POST ES6
// you can define the defaults at the top and then they get overwritten later if you add in newer values
function greet3 (firstName = 'Sarah', lastName = 'Jones') {
  if (typeof firstName === 'undefined'){firstName = 'John'}
  return 'Hello ' + firstName + ' ' + lastName;
  }
  console.log(greet3());
  // outputs Hello Sarah Jones
// if you then put values in later on, it overwrites the defults of Sarah and Jones

// FUNCTION EXPRESSIONS
// Putting a function as a variable assignment

// This is a named variable and an anonymous function
const square = function(x){
// you could name the function too const square = function square(){}
return x*x;
};
console.log(square(8));
// outputs 64