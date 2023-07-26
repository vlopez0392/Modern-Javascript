## More on parameters and arguments

Consider the following example:

```js
function registerUser(user){
	return user + ' is registered';
}
console.log(registerUser('John'));
```

Recall that the user variable is limited to the scope of the function and calling it in the global scope will result in a ReferenceError.  Note that if nothing is passed in the function parameter then undefined will be output. We can, however, define default values for parameters. There are two ways: 

### 1. Using an if statement 

```js
function registerUser(user){
	if(!user){
		user = 'Bot';
	}
	return user + ' is registered';
}
console.log(registerUser('John'));
```

### 2.  Using ES2015 default parameters

```js
function registerUser(user = 'Bot'){
	return user + ' is registered';
}
console.log(registerUser('John'));
```

### Rest parameters 

<p align = "justify">Just like with arrays, we can use the rest operator with parameters to input an array of parameters into the function. Unlimited number of parameters may be passed into the function. However, most of the time objects and arrays will be passed as parameters.</p>

```js
function sum(...numbers){
	let total = 0;
	for(const num of numbers){
		total += num;
	}
	return total;
}

console.log(sum(1,2,3));
```
<p align = "justify">Consider the following example with objects as parameters:</p>

```js
//Objects as parameters
function loginUser(user){
	return `The user ${user.name} with the id of ${user.id} is logged in.`
}

const user = {
	id:1,
	name: 'Vick'
}

console.log(loginUser(user));

//Object literals may also be passed directly as parameters 
console.log(loginUser({
	id:2,
	name: 'Sara'
}));
```

<p align = "justify">Consider the following example with arrays as parameters:</p>

```js
//Gets a random element in an array
function getRandomIndex(arr){
	const index = Math.floor(Math.random()*arr.length);
	return arr[index]
}
console.log(getRandomIndex([11,442,23,44,55]));
```
