//Function declaration
function add(a,b){
	return a+b;
}

//Arrow function
const add2 = (a,b) => {
	return a,b;
}
const subtract = (a,b) => a-b; //Implicit return
const double = a => a*2; 	   //Single parameter - No parentheses required

//Returning an object 
const createObject = () =>({
	name: 'Brad'
}); 

console.log(add2(1,2));
console.log(subtract(10,5));
console.log(double(16));
console.log(createObject());

//High order array methods with arrow functions
const numbers = [1,2,3,4,5];

//Using an anonymous function 
numbers.forEach(function(n){
	console.log(n);
});

//Using an arrow function in a callback
numbers.forEach(n => console.log(n));