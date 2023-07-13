//String methods
let x;
const name = 'Vick';
const age = 31;
x = 'Hello, my name is ' + name + ' and my I am ' + age + 'years old';

//Template literals 
x = `Hello my name is ${name} and I am ${age} years old`;

//String properties and methods
const s = 'Hello World';
x = typeof s;
console.log(x);

//String wrapper 
const str = new String('Hello world')
x = typeof str;
console.log(x);

//Indexing strings
x = s[1];
console.log(x);

//String prototype 
x = s.__proto__;
console.log(x);

//Changing case
x = s.toUpperCase();
console.log(x);
x = s.toLowerCase();
console.log(x);

//Returning the character at the specified index
x = s.charAt(0);
console.log(x);

//Indexing strings
x = s.charAt(0);
console.log(x);
x = s.indexOf('d');
console.log(x);

//Substring
x = s.substring(1,5);
console.log(x);

//Slicing 
x = s.slice(-11,-5);
console.log(x);

//Other methods 
const space = '     HI    ';
x = space.trim();
console.log(x);

x = s.replace('Hello', 'Hi');
console.log(x);

x = s.includes('Hell');
console.log(x);

//Split
x = s.split(' ');
console.log(x);