## Block scope
<p align = "justify">So far we have covered the global and function scopes. Now we are going to discuss block level scope and some of the differences between creating variables with let, const and var.</p>
```js
const x = 100;
if(true){
	const y = 200;
	console.log(x+y);
}
//console.log(x+y)
```
<p align = "justify">Since the variable y has not been defined in the global scope, we cannot access it. Its scope is limited to the function scope. This behavior is also observed in the block scope when we try to access a variable outside the code block. Consider the following looping example:</p>
```js
for(let i = 0 ; i <= 10 ; i++){
	console.log(i);
}
//console.log(i);
```

### Difference between var, let and const

<p align = "justify">The main difference between var and let (and const) is that a variable declared with var are not block scoped. For example, the variable c declared below is accessible outside the if block.  In ES2015 let and const we created to address this issue.  </p>

```js
if(true){
	const a = 500;
	let b = 600;
	var c = 700; 
}
console.log(c);
```

<p align = "justify">Finally, note that var is function scoped, so we cannot access variables declared with var inside functions. For instance, the variable d in the function shown below will not be accessible outside the function. </p>

```js
function run(){
	var d = 100;
	console.log(d);
}
run();
//console.log(d)
```

<p align = "justify">Note that variables declared with var in the global scope will be added to the window object. This behavior is not observed when declaring variables with let and const.</p>
