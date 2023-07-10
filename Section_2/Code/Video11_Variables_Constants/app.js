//Ways to declare a variable in in JS
//var, let and const

//Creating variables with a string data type
let firstName = 'John';
let lastName  = 'Doe';
console.log(firstName,lastName);

//Creating variables with a number data type
let age = 30;
console.log(age);

//Reassigning variables
age = 31; 
console.log(age);

//We may declare a let variable without initializing
let score;
score = 1;
console.log(score);

//Common pattern using let
if(true){
    score = score + 1;
}

//Using const -> Const variables cannot be reassigned
const x = 100;

//Const array -> May be modified with array methods
const arr = [1,2]
console.log(arr);
arr.push(3);
console.log(arr);

//Const object literal -> May be modified by accessing the attributes
//of the object literal and modifying them 
const person = {
    name:'Brad'
}
console.log(person.name);
person.name = 'John';
console.log(person.name);

//We may add key and values to constant object literals
person.email = "john@gmail.com"
console.log(person);