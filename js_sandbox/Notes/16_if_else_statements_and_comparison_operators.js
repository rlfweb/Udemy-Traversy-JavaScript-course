// IF STATEMENTS, IF/ELSE AND COMPARISION OPERATORS

// It is used to evaluate some kind of condition

// Syntax is same in most C languages

// If something is true, do something, if it isn't, do something else, i.e. in pseudocode

// if(something) {
//   do something
// } else {
//   do something else
// }

let id = 99;

// EQUAL TO (not recommended to use ==)

if(id == 99){
  console.log('CORRECT');
} // outputs CORRECT as 99 IS equal to id

// we're checking here if id is equal to 99 i.e. we are comparing id with 99
// it's not the same as using = as the assignment operator, as in "const id = 99;" where you are "assigning" 99 to id

if(id == 101){
  console.log('CORRECT');
} // outputs nothing as 101 is not equal to id and we didn't define an 'else'

if(id == 101){
  console.log('CORRECT');
} else {
  console.log('INCORRECT');
} // outputs INCORRECT as id is not equal to 101, it is equal to 99


// NOT EQUAL TO (not recommended to use !=)

if(id != 101){
  console.log('CORRECT');
} else {
  console.log('INCORRECT');
} // outputs CORRECT as it is correct that id is NOT equal to 101

// All this above is just testing the value not the type - so it would come back correct when matching '99' as a string or 99 as a number

// EQUAL TO VALUE AND DATA TYPE - THIS IS WHAT YOU SHOULD BE DOING - AVOIDS UNINTENDED PROBLEMS ARISING

// Use === for matching data type and value
// Use !== for not matching data type and value

id = 99

if(id === 99){
  console.log('CORRECT');
} // outputs CORRECT as 99 IS equal to 99

// NOT EQUAL 

id = '99'

if(id !== 99){
  console.log('CORRECT');
} // outputs CORRECT as 99 IS not equal to '99'


// TO TEST IF A VARIABLE IS DEFINED or UNDEFINED

let frieda = 51;

if(typeof frieda !== 'undefined'){
  console.log(`frieda is ${frieda}`);
} else {
  console.log('no frieda');
}
// this outputs 'frieda is 51' as the variable frienda has been defined and it's been defined as 51


// TO TEST IF SOMETHING IS GREATER OR LESS THAN
let rebecca = 150;

if(rebecca > 200){
  console.log('CORRECT');
} else {
  console.log('INCORRECT');
} // outputs INCORRECT as rebecca is not greater than 200

if(rebecca < 200){
  console.log('CORRECT');
} else {
  console.log('INCORRECT');
} // outputs CORRECT as rebecca is less than 200

// TEST IF SOMETHING IS GREATER THAN OR EQUAL TO
if(rebecca >= 150){
  console.log('CORRECT');
} else {
  console.log('INCORRECT');
} // outputs CORRECT as rebecca is equal to 150

// TEST IF SOMETHING IS LESS THAN OR EQUAL TO
if(rebecca <= 151){
  console.log('CORRECT');
} else {
  console.log('INCORRECT');
} // outputs INCORRECT as rebecca is not less than equal to 151


// IF ELSE

let colour = 'red'; // colour can be UK spelling as it's a variable name, so my choice

if(colour === 'red'){
  console.log('Colour is red');
} else if(colour === 'blue'){
  console.log('Colour is blue');
} 
// outputs 'Colour is red'



colour = 'blue'; 

if(colour === 'red'){
  console.log('Colour is red');
} else if(colour === 'blue'){
  console.log('Colour is blue');
} 
// outputs 'Colour is blue'


colour = 'yellow'; 

if(colour === 'red'){
  console.log('Colour is red');
} else if(colour === 'blue'){
  console.log('Colour is blue');
} 
// outputs nothing

// ELSE IF STATEMENT

colour = 'yellow'; 

if(colour === 'red'){
  console.log('Colour is red');
} else if(colour === 'blue'){
  console.log('Colour is blue');
} else if (colour === 'yellow'){
  console.log('Colour is yellow');
}
// outputs 'Colour is yellow'

// can keep adding endless else/if statements

// ELSE 
// when you want to end it, put in an else

colour = 'orange'; 

if(colour === 'red'){
  console.log('Colour is red');
} else if(colour === 'blue'){
  console.log('Colour is blue');
} else if (colour === 'yellow'){
  console.log('Colour is yellow');
} else {
  console.log('Colour is not red, blue or yellow ')
}
// outputs 'Colour is not red, blue or yellow' because none of the if statements have been matched


// LOGICAL OPERATORS

// tests more than one thing
// && is the logical operator - it means that both statements either side of it are true

const name = 'Sarah';
let age = 14;

// AND &&

if(age > 0 && age < 12){
  console.log(`${name} is a child`);
} else if (age >= 13 && age <= 19){
  console.log(`${name} is a teenager`)
} else {
  console.log(`${name} is an adult`)
}
// outputs 'Sarah is a teenager'

// OR ||

if(age < 16 || age > 65){
  console.log(`${name} cannot run in adult's race`);
}
// outputs 'Sarah cannot run in adult's race' as Sarah is only 14, so she is under 16

age = 28;

if(age < 16 || age > 65){
  console.log(`${name} cannot run in adult's race`);
} else {
  console.log(`${name} is registered for the race`)
}
// outputs 'Sarah is registered for the race'


// SHORTHAND WAYS OF DOING IF STATEMENTS
// TERNARY OPERATOR using ?

let bananas = 100;

console.log(bananas === 100 ? 'correct' : 'incorrect');
// outputs correct as it's true that bananas is equal to 100


// IF STATEMENTS DO WORK WITHOUT BRACES (BUT NOT RECOMMENDED)
if(bananas === 100)
  console.log('bananas is 100');
else  
  console.log('bananas is not 100');
  // outputs bananas is 100