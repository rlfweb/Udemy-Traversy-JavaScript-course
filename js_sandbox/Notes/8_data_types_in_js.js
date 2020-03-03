// DATA TYPES IN JS

// Primitive Data Types: 
// stored diretly in the location the variable accesses
// stored on the stack - you access it by its actual value

// Reference Data Types: 
// Accessed by reference - data isn't stored on the variable
// Objects that are stored on the heap
// A pointer to a location in memory


// 6 primitive data types
// strings - letters, symbols, numbers
// numbers - all decimals and floats, all considered numbers
// boolean - true or false
// null - an intentional empty value
/* undefined - a variable that has not been assigned a value - if you declare a value and don't put a value inside it, it will be undefined by default */
// Symbols (ES6)

// Reference Data Types / Objects
// Arrays
// Object Literals
// Functions
// Dates
// Anything else you can store

//DYNAMICALLY TYPED LANGUAGE
// Types are associated with values not variables
// The same variable can hold multiple types - it can hold a string and then be set to a number without any errors
// We do not need to specify data types - don't need to define whether it is a string variable or a number variable
// Most other languages are statically types (Java, C#, C++)
// There are supersets of JS and addons to allow static typing (TypeScript, Flow)

// PRIMITIVE TYPES

// STRINGS
const name = 'John Doe';
console.log(typeof name); // will output String

const age = 45; // no quotes otherwise it becomes a String
console.log(typeof age); // will output Number

const hasKids = true; // no quotes otherwise it becomes a String
console.log(typeof hasKids); // outputs Boolean

const car = null; // no quotes otherwise it becomes a String
console.log(typeof car); // outputs object
// this is a bug in JS - need to google typeof null is object - for explanation of bogus

let test;  // for undefined
console.log(typeof test); // outputs undefined

const sym = Symbol(); // 
console.log(typeof sym); // outputs Symbol

// REFERENCE TYPES - OBJECTS

// Arrays
const hobbies = ['movies', 'music'];
console.log(typeof hobbies); //outputs object


// Object Literals
const address = {
  city: 'Boston',
  state: 'MA'
}
console.log(typeof address); //outputs object

// Dates
const today = new Date();
console.log(today); // outputs today's date
console.log(typeof today); //outputs object