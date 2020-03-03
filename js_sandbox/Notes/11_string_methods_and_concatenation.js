// STRING METHODS AND CONCATENATION

const firstName = 'Susannah';
const lastName = 'Johnson';
const age = 46;
const str = 'Hello there my name is Brad';
const tags = 'web design, programming, software';

let val;

val = firstName + lastName;
console.log(val); //outputs SusannahJohnson

// CONCATENATION
val = firstName + ' ' + lastName;
console.log(val); //outputs Susannah Johnson

// APPENDING
val = 'Rebecca '; 
val += 'French';
console.log(val); //outputs Rebecca French (without the += it would just output French)

val = 'Hello, my name is ' + firstName + ' and I am ' + age;
console.log(val); // outputs Hello, my name is Susannah and I am 46

// ES6 HAS TEMPLATE LITERALS, WHICH IS EASIER

//ESCAPING
val = "That's awesome, I can't wait"; // need double quotes for apostrophes to work
val = 'That\'s awesome, I can\'t wait'; // the backslash is an escape that allows the apostrophe not to be read as the end of the string

// LENGTH - properties don't need (), unlike methods
val = firstName.length;
console.log(val); // outputs 8 as Susannah has 8 characters

// CONCAT
val = firstName.concat(' ', lastName);
console.log(val); // outputs Susannah Johnson using the Concat method

// CHANGE TO UPPERCASE
val = firstName.toUpperCase();
console.log(val); // outputs SUSANNAH 

// CHANGE TO LOWERCASE
val = firstName.toLowerCase();
console.log(val); // outputs susannah

//STRINGS AS READ ONLY ARRAYS - NOT VERY USEFUL
// arrays and strings start at index 0
val = firstName[3]; // outputs a, as a is in index point 3
console.log(val);

// indexOf() method - case sensitive
val = firstName.indexOf('n'); 
console.log(val);// outputs 4 as it searches the string for the first 'n' and outputs the index of that letter, in this case 4 

//lastindexOf() method - case sensitive
val = firstName.lastIndexOf('n'); 
console.log(val);// outputs 5 as it searches the string for the last 'n and outputs the index of that letter, in this case 5

// charAt() method 
val = firstName.charAt('2'); 
console.log(val);// outputs 's' as it searches the string for the character that occupies index point 2 


// get last character - a common formula in JS when dealing with strings
val = firstName.charAt(firstName.length - 1); 
console.log(val);// outputs 'h' as will always output the last character

// pull substring out of a string
val = firstName.substring(3, 7);
console.log(val); // outputs 'anna' as we are pulling out characters from index point 3 to index point 7


// slice (similar to substring)

val = firstName.slice(0,4);
console.log(val); // outputs 'Susa' as it slices out characters from index point 0 to index point 4. 
// it can also work for negative numbers, which means it goes to the end of the string and gets the characters from there. Can be useful.
val = firstName.slice(-2);
console.log(val); // outputs 'ah'

// split (can be really handy - splits a string into an array using a separator)
val = str.split(' ');
console.log(val); // outputs an array ["Hello", "there", "my", "name", "is", "Brad"]

// this can be handy if you had a form on webiste to create a blogpost with tags that users put in, which you then wanted to make an array from
val = tags.split(',');
console.log(val); //outputs ["web design", " programming", " software"] as an array

// replace() - replace something inside the string
val = str.replace('Brad', 'Rebecca');
console.log(val); // outputs Hello there my name is Rebecca

// includes() gives true or false depending if something is in the string
val = str.includes('Hello');
console.log(val); //outputs true
val = str.includes('bananas');
console.log(val); //outputs false

