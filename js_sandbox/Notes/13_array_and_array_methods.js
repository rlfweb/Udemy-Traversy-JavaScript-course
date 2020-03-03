//ARRAYS AND ARRAY METHODS

//Create some arrays

const numbers = [43,56,33,23,44,36,5];
const numbers2 = new Array(22,45,33,76,54);
const fruit = ['Apple', 'Banana', 'Orange', "Pear"];
const mixed = [22, 'hello', true, undefined, null, {a:1, b:1}, new Date()];



console.log(mixed); // outputs array of all different types

// so let's initialise a variable to begin

let val; 

console.log(numbers); // logs the numbers
console.log(val); // logs undefined as val is not yet defined


// GET ARRAY LENGTH

val = numbers.length;
console.log(val); // outputs 7 as there are 7 numbers in our array

// CHECK IF SOMETHING IS AN ARRAY

// use a method and pass in whatever we want to test, in this case numbers
val = Array.isArray(numbers);
console.log(val); // outputs true as numbers is an array

val = Array.isArray('hello');
console.log(val); // outputs false as 'hello' is not an arry

// GET SINGLE VALUE FROM AN INDEX POINT IN A ARRAY

val = numbers[3];
console.log(val); // outputs 23, as 23 is in index position 3 in the array. Arrays are zero based. 

val = numbers[0];
console.log(val); // outputs 43 which is the first value, but index point 0 


// Arrays are not immutable, we can modify them. 

// Insert into an Array
numbers[2] = 100;
console.log(numbers); // 100 has replaced 33 as the number in the index 2 position. 

// Find index of a value
val = numbers.indexOf(36);
console.log(val); //outputs 5 as 36 occupies the index 5 position 

// MUTATING ARRAYS

// adding onto end of array
numbers.push(250);
console.log(numbers); // adds 250 at the end of the existing array

// adding onto beginning of an array
numbers.unshift(120); 
console.log(numbers); // adds 120 to the start of the array occupying position zero in the array and all other values move up one index position

//deleting value from end of an array
numbers.pop(); 
console.log(numbers); // deletes the final value, in this case, 250 from the end of the array

// deleting value from beginning of an array
numbers.shift(); 
console.log(numbers); // deletes first value from an array, in this case 120

// splicing out one value from any place in the array
numbers.splice(1,1);
console.log(numbers); // deletes the value that occupies the 1 index position. you give the starting and ending point of where you want the splice to happen. In this case 56 goes. 

// splicing out more than one value from any place in the array
numbers.splice(1,3);
console.log(numbers); // deletes the values that occupies the 1, 2 and 3 index positions. you give the starting and ending point of where you want the splice to happen. In this case 56, 100 and 23 are deleted. 

// reverse the array
numbers.reverse();
console.log(numbers); // reverses the values, so now it outputs 5, 36 43 insread of 43, 36, 5

// concatenate arrays
val = numbers.concat(numbers2);
console.log(val); // this outputs the values of the numbers array followed by the values from the numbers2 array, all in one new array

// sort array
val = fruit.sort();
console.log(val); //outputs the fruit array in alphabetical order

// sorting numbers in arrays
val = numbers.sort(); 
console.log(val); // outputs numbers sorted by the first digit only i.e. 100, 23, 36, 43, 44, 5, 56

// use the "compare function" to sort numbers  
val = numbers.sort(function(x, y){
  return x - y;
})
console.log(val); // outputs numbers sorted from smallest to largest i.e. 5, 23, 36, 43, 44, 56, 100

// reverse sort
val = numbers.sort(function(x, y){
  return y - x;
})
console.log(val); // outputs numbers sorted from largest to smallest i.e. 100, 56, 44, 43, 36, 23, 5

// Find
function under50(num){
  return num < 50;
}
val = numbers.find(under50);
console.log(val); // returns 43 as this is the first number in the array called numbers that is under 50

// Find a number over 50 for example
function over50(num){
  return num > 50;
}
val = numbers.find(over50);
console.log(val); // returns 56 as this is the first number in the numbers array that is over 50

