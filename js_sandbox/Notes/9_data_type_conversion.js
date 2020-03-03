// Converting one data type to another


let val;


val = 555;
//outputs
console.log(val); //outputs 555 
console.log(typeof val); // outputs number - tells us the datatype 
console.log(val.length); // outputs undefined - as length can only be used for strings


// Number to string
val = String(555);
//outputs
console.log(val); //outputs 555 
console.log(typeof val); //outputs string - tells us the datatype 
console.log(val.length); //outputs 3 as 555 has 3 characters


val = String(4+4);
//outputs
console.log(val); //outputs 8 
console.log(typeof val); //outputs string - tells us the datatype 
console.log(val.length); //outputs 1, as 8 has 1 character


// Boolean to string
val = String(true);
console.log(val);

// Date to string
val = String(new Date());
console.log(val);
console.log(val.length); //outputs 55 as date is in format with 55 characters

// Array to string
val = String([1,2,3,4]);
console.log(val); // outputs 1,2,3,4 as a string
console.log(val.length); //outputs 7 as it counts numbers and commas as characters

// can also use the toString() method

val = (5).toString(); // outputs 5 as a string
console.log(val);

// can also use the toString() method
val = (true).toString();
console.log(val); // outputs true as a string


// String to number
val = Number('5');

//outputs
console.log(val); //outputs 5 as a number
console.log(typeof val); // outputs number - tells us the datatype 
console.log(val.toFixed(2)); // toFixed allows us to specify no. of decimal places - in this case 5.00


// Boolean to a number

val = Number(true);
console.log(val); // outputs 1
console.log(typeof val); // outputs number

val = Number(false);
console.log(val); // outputs 0
console.log(typeof val); // outputs number

val = Number(null);
console.log(val); // outputs 0
console.log(typeof val); // outputs number


val = Number('hello');
console.log(val); // outputs nan - not a number
console.log(typeof val); // outputs number

val = Number([1,2,3]);
console.log(val); // outputs nan - not a number
console.log(typeof val); // outputs number


val = parseInt('100');
console.log(val); // outputs 100 as a number
console.log(typeof val); // outputs number

val = parseInt('100.30');
console.log(val); // outputs 100 as a number as Int stands for Integer
console.log(typeof val); // outputs number

// If we want decimals, need to use parseFloat
val = parseFloat('100.30');
console.log(val); // outputs 100.3 as a number (only one decimal as 0 isn't needed)
console.log(typeof val); // outputs number

// If we want decimals, need to use parseFloat
val = parseFloat('100.31');
console.log(val); // outputs 100.31 as a number (2 decimal places as the 1 is needed)
console.log(typeof val); // outputs number

// Or can use val.toFixed(2)
val = parseFloat('100.31');
console.log(val); // outputs 100.31 as a number (2 decimal places as the 1 is needed)
console.log(typeof val); // outputs number
console.log(val.toFixed(2));


// String to number - use toNumber() method?


//Type Coercion
const val1 = 5;
const val2 = 6;
const sum1 = val1 + val2;
console.log(sum1); // outputs 11
console.log(typeof sum1); // outputs number



const val3 = '5';
const val4 = 6;
const sum2 = val3 + val4;
console.log(sum2); // outputs 56 as JS has seen there are two data types and it has decided to make them both into strings and added them
console.log(typeof sum2); // outputs string

//If we wanted 56 to be a number, we could do 
const sum3 = Number(val3 + val4);
console.log(sum3);