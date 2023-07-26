//Global and function scope
//Global scope 
const x = 100;
console.log(x,'in global scope')

//Function scope
function run(){
	console.log(x, 'in function scope');
}

//Block scope 
if(true){
	console.log(x, 'in block scope');
}

//Function scope and variable Shadowing
function add(){
	const x = 10
	const y = 50;
	console.log(x+y, 'in function scope'); //Will output 60.
}
add();