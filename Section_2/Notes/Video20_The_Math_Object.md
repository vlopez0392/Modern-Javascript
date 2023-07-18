<h2>The Math Object</h2>

<p align = "justify">
    JS has a built-in object called Math and this object has many methods that are useful when you need to perform mathematical operations such as finding the square root of a number, rounding numbers or generating random numbers. Some of the most commonly used methods are shown below with behavior explanation in the comments.
 </p>

 ```Javascript
 //The Math object
let x;

//Getting the square root of a number
x = Math.sqrt(9);

//Getting the absolute value of a number
x = Math.abs(-5);

//Rounding numbers
x = Math.round(4.2) //Rounds down
x = Math.round(4.6) //Rounds up
x = Math.ceil(4.1); //Always rounds up
x = Math.floor(4.9); //Always rounds down

//Exponentiation
x = Math.pow(2,3); // 2^3 = 8

//Min and max
x = Math.min(4,5); //Returns min of input parameters 
x = Math.max(5,6); //Returns max of input parameters

//Generating random numbers
x = Math.random(); //Returns a random number between 0 and 1

//Generating a number in a specific range, e.g. 1-10
x = Math.floor(Math.random()*10 + 1);

console.log(x);
```