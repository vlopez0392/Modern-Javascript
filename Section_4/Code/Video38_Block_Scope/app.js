//Block scope
const x = 100;
if(true){
	const y = 200;
	console.log(x+y);
}

//A for-loop also has block level scope 
for(let i = 0 ; i <= 10 ; i++){
	console.log(i);
}

//Var,let and const 
if(true){
	const a = 500;
	let b = 600;
	var c = 700; 
}
console.log(c);