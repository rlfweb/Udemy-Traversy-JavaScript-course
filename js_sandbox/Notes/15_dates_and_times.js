// DATES AND TIMES

let val;

const today = new Date();
// if we don't pass anything in here, we get today's date by default

val = today;
console.log(val); // outputs today's date
console.log(typeof val); //outputs object

val = today.toString();
console.log(typeof val);
// outputs string instead of object

let birthday = new Date('9-19-1981 11:25:00');
val = birthday;
console.log(val); // outputs 19 September 1981 11:25:00 as a date object

// There are various ways of putting in dates

birthday = new Date ('November 28 1930');
val = birthday;
console.log(val);

// Another way

birthday = new Date ('12/18/1973');
val = birthday;
console.log(val);

// If you put javascript date object into google, you get mozilla mdn and get a lot of options

// GETTING TODAY'S MONTH

val = today.getMonth();
console.log(val);
// outputs 0 as it's January today as it's zero based

// GETTING TODAY'S DATE - JUST THE DAY OF THE MONTH

val = today.getDate();
console.log(val);
// outputs 20 as it's the 20th January 2020 today

// GETTING TODAY'S DAY

val = today.getDay();
console.log(val);
// outputs 1 as a numerical value, because today is Monday and it starts on Sunday. So Sunday is 0, Monday is 1, Tuesday is 2 ...


// GETTING TODAY'S YEAR

val = today.getFullYear();
console.log(val);
// outputs 2020 as that's the year!

// GETTING CURRENT HOURS

val = today.getHours();
console.log(val); 
// outputs 11 as it's just after 11am right now

// GETTING CURRENT MINUTES

val = today.getMinutes();
console.log(val); 
// outputs 3 as it's currently 11.03am

// GETTING CURRENT SECONDS

val = today.getSeconds();
console.log(val);
// outputs 21 as it's 11.03 and 21 seconds. This changes every time you refresh of course. 

// GETTING CURRENT MILLISECONDS

val = today.getMilliseconds();
console.log(val);
// outputs 998. This changes every time you refresh of course. 

// GET CURRENT TIMESTAMP

val = today.getTime();
console.log(val);
// outputs 1579518349712, which is number of seconds that have passed since 1 January 1970. 

// WE CAN SET THE MONTH TO BE A PARTICULAR MONTH

birthday.setMonth(2);
console.log(birthday);
// outputs March instead of December as March is the second month on a zero-based system. 
// January is 0, February is 1, March is 2 ...

// SET DATE

birthday.setDate(12);
console.log(birthday);
// outputs date as 12th instead of 18th

// SET YEAR

birthday.setFullYear(1985);
console.log(birthday);
//outputs year as 1985 instead of 1973

// SET TIME

birthday.setHours(3);
console.log(birthday);
// outputs time as 3am

// SET MINUTES
birthday.setMinutes(38);
console.log(birthday);
// outputs minutes at 38 mins past 3

// SET SECONDS
birthday.setSeconds(41);
console.log(birthday);
// outputs time as 03:38:41

// learn more about date objects by looking at mpn documentation