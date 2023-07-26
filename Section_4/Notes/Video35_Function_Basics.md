## Function basics

<p align = "justify">Functions allow us to group blocks to code that are meant to be executed repeatedly. This allows our code to be more readable and easier to understand.</p>
<p align = "justify">We create a function using the function keyword</p>

```js
function sayHello(){
	console.log('Hello World');
} 

//Calling the function
sayHello();
```

<p align = "justify">The code within the curly braces will be executed when the function is called. When we declare the a function, we make use of parameters to pass data into the function. Then, when we call the function, we formally call those parameters arguments. Consider the following function declaration:</p>

```js
//Declaring a function with parameters
function add(num1,num2){
	console.log(num1+num2);
} 

//Calling the function with arguments 
add(1,2);
```

<p align = "justify">Usually functions return some value. This value is returned with some purpose and can for instance, be stored in a variable. For instance, the following function returns the subtraction of two numbers.</p>

```js
//A function with return
function subtract(num1,num2){
	return num1 - num2;
} 

//Storing the return value of a function call
const result = subtract(10,2);
console.log(result, subtract(20,5));
```

<p align = "justify">Note that anything after the return keyword is not executed. Returning without a value is also allowed. This is convenient when making a request to a backend or API, or updating a DB.</p>