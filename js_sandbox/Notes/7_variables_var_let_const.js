//VARIABLES = VAR LET AND CONST

// comment out highlighted block with cmd+/


// var, let, const

// stay away from var - it's pre-ES6

// can reassign variables if you use let

let name = 'John Doe';
console.log(name);

name = 'Steve Smith';
console.log(name);

/* Initialise a variable, but not give a value (which you may want to do if you have an if, else conditional statement, as there are two possible values and you don't want to give the value at the beginning) */

let greeting;
console.log(greeting);
// then give it a value
greeting = 'hello';
console.log(greeting);

// A variable can include only letters, numbers, _, $
// variables cannot start with a number. They can start with letters, _ or $ so 
// let 1name = 'john'; will give an error 
// you might do _name for private varibles
// you might do $name for jquery variables

//Multi-word variables 
let firstName; // camelCase is recommended for regular variables
let first_name; // underscore convention
let FirstName; // Pascal case - sometimes recommended in constructor functions within OOP
let firstname; // all lowercase not recommended

// You can't reassign variables if you use const

// CONST - stands for constant

const topName = 'John';
console.log(topName);

//cannot reassign, if you have below it 
// name = 'sara';
//gives an error

// and you have to declare it - give it a value
// can't have const greeting; and assign the variable later
// you have to have const greeting = 'hello';

const person = {
  name: 'John',
  age: 30
}

// when we get into objects you can change the data inside object, you just can't reassign person, it is still set to that object

person.name = 'Sara';
person.age = 32;

console.log(person);

// same thing with arrays - you can mutate them if using an object, array or other reference type, not reassign them as a new primitive value

const numbers = [1,2,3,4,5];
numbers.push(6);
console.log(numbers);

// recommend use const unless plan the value on changing or need to initialise it or using it in loop