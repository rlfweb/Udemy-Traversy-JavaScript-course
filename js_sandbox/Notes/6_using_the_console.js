// JS Comment

/* 
JS Multi 
line 
comment
*/

/* Right click within html document to select 'Open with Live Server' */

/* Open View, Developer Tools, Console, to use the console */


//Log to console 
console.log('Hello World');
console.log(123);
console.log(true);
// we can log variables
const greeting = 'Hello';
console.log(greeting);
// we can log arrays
console.log([1,2,3,4,5]);
// we can log objects
console.log({a:1, b:2});
// we can print objects out as a table
console.table({a:1, b:2});
/* we can log errors - it logs it and puts it in red and also shows us where the error is in the Application */
console.error('This is some error');
// we can clear the console
console.clear();
/* we can do warnings - comes up yellow in console and can click on it to show us where warning is. */
console.warn('This is a warning');

/* we can time things, to see how long some of your script takes to run. This below logs to console the time it took computer to write "The time is 5pm" six times. */
console.time('Hello');
  console.log('The time is 5pm');
  console.log('The time is 5pm');
  console.log('The time is 5pm');
  console.log('The time is 5pm');
  console.log('The time is 5pm');
  console.log('The time is 5pm');
console.timeEnd('Hello');