## Arrow Functions

<p align = "justify">Arrow functions were introduced in ES2015 or ES6 and offer some advantages such as: </p>
<ul>
	<li>Compactness</li>
	<li> Implicit return</li>
	<li> Lexical scope </li>
	<li> Useful to implement high-order array methods. </li>
</ul>
<p align = "justify">We declare an arrow function as follows: </p>
```js
//Arrow function
const add2 = (a,b) => {
	return a,b;
}

//Implicit return
const subtract = (a,b) => a-b; 

//Single parameter - No parentheses required
const double = a => a*2; 

//Returning an object
const createObject = () =>({
	name: 'Brad'
});
```

<p align = "justify">The first arrow function contains a return statement just like a regular function declaration. Note that the return statement can be implicit if the arrow function consists of a single line. The curly braces can be omitted too. Then, in the next arrow function <i>double</i>, we may omit the parentheses since only a single parameter is required. Finally, if we wish to correctly return an object, then we must surround the curly braces of the object with parentheses.</p>
### High-order array methods

<p align = "justify">Arrays have a high-order method called for each which allows us to traverse the array element by element and perform some action on them. To do so, we pas a function as a parameter to the forEach method. We may use an anonymous function as follows: </p>
```js
const numbers = [1,2,3,4,5];

//Using an anonymous function
numbers.forEach(function(n){
	console.log(n);
});
```

<p align = "justify">We may also use an arrow function, which is more concise:  </p>
```js
const numbers = [1,2,3,4,5];

//Using an arrow function in a callback
numbers.forEach(n => console.log(n));
});
```