//Nested function scope
function first(){
	const x = 100; 

	//Nested function
	function second(){
		const y = 200;
		console.log(x+y);
	}

	second();
}

first(); //Outputs 300
//console.log(y) //Will output a ReferenceError

//Nested block scope
if(true){
	const x = 100;
	if(x === 100){
		const y = 200;
		console.log(x+y);
	}
	//console.log(y) //Will output a ReferenceError
}