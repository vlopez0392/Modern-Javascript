## Global and Function Scope
<p align = "justify">Scope is an important concept in JS.  It refers to the current area or context of a specific piece of code. There are certain rules for what we can access in an specific scope. Variables in the <strong>global scope</strong> for instance, will be accessible from anywhere. Consider the window object in the global scope:</p>

```js
//The window object can be accessed from anywhere within the browser 
window.alert('Hello');
```

<p align = "justify">Since the window object is the top-most object, there is no need to prepend "window" whenever we want to access the properties and methods of the window object.</p>

```js
//Both of the function calls are valid
alert('No need to prepend the window object')
window.innerWidth();
```

<p align = "justify">Any variable we create outside functions or a block is in the global scope. These variables may be accessed both in the global and function scopes. For instance, the variable x in the example below will be accessible in the global, function and block scopes.
</p>

```js
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
```

<p align = "justify">On the other hand, functions have their own scope.  The variable y in the code snippet below will only be accessible in the function. A ReferenceError will be thrown if we try to access this variable outside the function.
</p>

```js
//Function scope 
function add(){
	const y = 50;
	console.log(x+y); //x is accessible since it is in the global scope
}
//console.log(y);
```
 
If we declare another variable x in the function add, it will shadow (replace) the variable in the global scope.

```js
//Variable Shadowing
function add(){
	const x = 10
	const y = 50;
	console.log(x+y); //Will output 60.
}
```

What about local scope. Local scope refers to whatever scope you are in. Either global, function or block scope.