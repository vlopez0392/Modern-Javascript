//Creating arrays 
let x;

//Array literal
const numbers = [12,45,33,29,39,6];

//Array constructor
const fruits = new Array('apple','grape','orange');

//Accesing specific items by index
x = numbers[0];
x = numbers[0] + numbers[3]; //We can create expressions accesing multiple elements in the array simultaneously
x = `My favorite fruit is ${fruits[2]}`;

//Multiple data types in a single array
const mixed = [1, 'one', true, null];

//Length of the array
x = numbers.length;

//Changing elements in an array through indexing 
fruits[2] = 'pear'; //Arrays are mutable and we can change them.
x = fruits;

//The length property is not read-only and can be changed 
numbers.length = 1; //Eliminates all but the first element in the array.

//Adding elements to the array 
fruits[3] = 'strawberry'; //Adding to the next index after the last ( corresponds to fruits.length)
fruits[fruits.length] = 'mango'; //No need to know the length of the array beforehand

fruits.length = 6;

console.log(typeof fruits[fruits.length])
console.log(x);
