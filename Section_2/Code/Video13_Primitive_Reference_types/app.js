//Values are stored on the stack 
const name = 'John';
const age  =  30;

//Reference values are stored on the heap
const person = {
    name:'Vick',
    age: 31
}

let newName = name; //name is a deprectaed property on the window object
newName = 'David';

let newPerson = person;
console.log(name, newName);
console.log(person, newPerson);