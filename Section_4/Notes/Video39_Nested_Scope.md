## Nested scope

<p align = "justify">Nested functions relate to closures (more on this later). For now, we can see how scope works with nested functions.</p>
```js
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
```

<p align = "justify"> From the child function we can access any variables in their parent functions. However, we cannot access child function variables from a parent scope. The above also applies to nested scopes with blocks. </p>
```js
if(true){
	const x = 100;
	if(x === 100){
		const y = 200;
		console.log(x+y);
	}
	//console.log(y) //Will output a ReferenceError
}
```