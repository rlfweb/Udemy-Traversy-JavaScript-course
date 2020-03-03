const num1 = 100;
const num2 = 50;
let val;


// Simple maths with numbers
val = num1 + num2; //outputs 150
val = num1 * num2; //outputs 5000
val = num1 - num2; //outputs 50
val = num1 / num2; //outputs 2
val = num1 % num2; //the modulus operator outputs 0 as this is what is left over 


console.log(val);


// MATHS OBJECTS
//we can use 
//Math is an object so it has properties (basically an attribute) and methods (a function inside an object)

val = Math.PI;
console.log(val);
// outputs 3.14.....

val = Math.round(2.8);
console.log(val);
// rounds to the nearest number so 2.8 would round to 3. 2.4 would round to 2

val = Math.ceil(2.4);
console.log(val);
// outputs 3. rounds up to the nearest integer

val = Math.floor(2.8);
console.log(val);
// outputs 2. rounds down to the nearest integer

val = Math.sqrt(64);
console.log(val);
// outputs 8 - gives square root of number

val = Math.abs(-3);
console.log(val);
// outputs 3 - if we put in -3, we get 3 as that is the absolute version of the number

val = Math.pow(8, 2);
console.log(val);
// outputs 64 - 8 to the power of 2 i.e. 8x8

val = Math.min(2,33,4,55,-6,3);
console.log(val);
// outputs -6 as this is the smallest number of the ones we put in


val = Math.max(2,33,4,55,-6,3);
console.log(val);
// outputs 55 as this is the largest number of the ones we put in


val = Math.random();
console.log(val); //outputs a random different number each time you refresh. But it gives a random number with lots of decimal places

val = Math.floor(Math.random() * 20 +1);
console.log(val); //outputs a random different whole number between 1 and 20 each time you refresh.