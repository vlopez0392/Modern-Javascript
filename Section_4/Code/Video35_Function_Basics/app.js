//Function basics
function sayHello(){
	console.log('Hello World');
} 

//Calling the function
sayHello();

//Declaring a function with parameters
function add(num1,num2){
	console.log(num1+num2);
} 

//Calling the function with arguments 
add(1,2);

//A function with return
function subtract(num1,num2){
	return num1 - num2;
} 

//Storing the return value of a function call
const result = subtract(10,2);
console.log(result, subtract(20,5));