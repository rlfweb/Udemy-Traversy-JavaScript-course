// TEMPLATE LITERALS - ES6 - shortcut to contatenation
//compatible with all modern browsers

const name = 'Jane';
const age = 31;
const job = 'Web Developer';
const city = 'Miami';
let html;

// without template strings (ES5)

// doesn't look good - all meshed together
html = '<ul><li>Name: ' + name + ' </li><li>Age: ' + age + ' </li><li>Job: ' + job + ' </li><li>City: ' + city + ' </li></ul>';

document.body.innerHTML = html;

// to put on new lines, have to concatenate each line. but still a bit of a mess
html = '<ul>' + 
      '<li>Name: ' + name + ' </li>' +
      '<li>Age: ' + age + ' </li>' +
      '<li>Job: ' + job + ' </li>' +
      '<li>City: ' + city + ' </li>' + 
      '</ul>';

document.body.innerHTML = html;


function hello(){
  return 'hello';
}


// With Template Strings / Template Literals (ES6)
// use backticks - that's how it knows you are using Template Literal

html = `
  <ul>
    <li>Name: ${name}</li>
    <li>Age: ${age}</li>
    <li>Job: ${job}</li>
    <li>City: ${city}</li>
    <li>${2 + 2}</li>
    <li>${hello()}</li> 
    <li>${age > 30 ? 'Over 30' : 'Under 30'}</li>
  </ul>
`;
document.body.innerHTML = html;
// outputs the same, but much cleaner to write and to read. And can use functions within it