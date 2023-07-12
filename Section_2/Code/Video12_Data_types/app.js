/////Primitive types
//String data type
const firstName = 'Sara';

//Number
const age = 30;
const temp = 98.9;

//Boolean 
const hasKids = true;

//Null
const aptNumber = null;

//Undefined
let myUndefinedVariable;

//Symbol 
const symbolId = Symbol('id');

//
/////Reference types
const arr = [1,2,3,4]

const person = {
    name: 'Vick'
}

function sayHello(){
    console.log('Hello');
}

const output = sayHello;
console.log(output, typeof output);