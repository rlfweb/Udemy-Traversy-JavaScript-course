// OBJECT LITERALS

// object literal reference types
// defined by curly brackets

const person = {
  firstName: 'Sarah',
  lastName: 'Smith',
  age: 30,
  email: 'sarah@gmail.com',
  hobbies: ['music', 'sport'],
  address: {
    city: 'Tampa',
    state: 'FL'
  },
  getBirthYear: function(){
    return 1989;
  }
}

let val;
val = person;
console.log(val); //outputs printout of the object itself i.e. {firstName: "Sarah"}

//outputs a specific value - this is recommended way
val = person.firstName;
console.log(val); // outputs Sarah

// another way to select values from an object, not so recommended
val = person['firstName']
console.log(val); // outputs Sarah

// val = person.firstName;
val = person['lastName'];
console.log(val); // outputs Smith
val = person.age;
console.log(val); // outputs 30
val = person.hobbies[1];
console.log(val); // outputs Sports as this is in index position 1 in the array

val = person.address;
console.log(val); // prints whole address object i.e. {city: "Tampa", state: "FL"}

val = person.address.city;
console.log(val); // prints Tampa

// OTHER SYNTAX TO DO THIS
val = person.address['city'];
console.log(val); // prints Tampa

val = person.getBirthYear();
console.log(val); // print 1989

// Within objects we can access other properties and do calculations
// getBirthYear: function(){
//   return 2019 - this.age;
// this doesn't work because I've pasted it down here from above
// but should output the birthyear as it's current date minus age


// ARRAYS OF OBJECTS

const people = [
  {name: 'John', age: 30},
  {name: 'Jane', age: 23},
  {name: 'Nancy', age: 40}
];

for(let i = 0; i < people.length; i++){
  console.log(people[i].name);
}