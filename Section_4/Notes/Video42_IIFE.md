## IIFE (Immediately Invoked Function Expressions)

<p align = "justify">Immediately invoked function expressions allows to automatically execute functions without calling them explicitly in JS. IIFEs can help us avoid global scope pollution. Consider the following example:</p>

```js
//IIFE syntax
(function(){
	const user = 'Vick'; //Not in the global scope
	console.log(user);
	const hello = () => console.log('Hello from the IIFE');
	hello();
})();
```

<p align = "justify">If the variable name user is already in the global scope of another JS file, we can still use it inside an IIFE since the variable is now in the IIFE scope. We may also declare functions inside an IIFE and call them within them. </p>
<p align = "justify">We may also add parameters to the IIFE: </p>

```js
//Adding parameters to an IIFE
(function(name){
	console.log('Hello ' + name);
})('Shawn');
```

We may also have name IIFEs, however be careful of calling the IIFE named function within itself (infinite recursion occurs):

```js
//Named IIFE
(function hello(){
	console.log('Hello');
})();
```
