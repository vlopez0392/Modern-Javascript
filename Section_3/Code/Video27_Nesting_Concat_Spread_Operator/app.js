let fruits = ['apple','pear','orange'];
let berries = ['strawberry','blueberry','raspberry'];

//Nesting an array within an array - Many nesting levels as possible
fruits.push(berries);

//Accessing a nested array's elements
x = fruits[3][1];

//Nesting multiple arrays in an array
const allfruits = [fruits,berries];
x = allfruits[1][0];

//Concatenating arrays - Takes elements from one array and push them into another array
fruits = ['apple','pear','orange'];

//1.Using concat
x = fruits.concat(berries);

//2.Using the spread operator ... (Commonly used)
x = [...fruits, ...berries];

//Flatten arrays - Elements from nested arrays are extracted and added
//as elements of the target array.
const arr = [1,2,[3,4],5,[6,7,8]];
x = arr.flat();

//Static methods on array object
//Checks if given argument is an array - Some DOM data structures behave 
//as arrays but are not arrays - isArray() is useful to check if a DS is an
//array.
x =Array.isArray(fruits) 
x =Array.isArray('hello');

//Create an array from an array-like value such as strings
x = Array.from('12345'); 

//Array.Of() - Create array from 
a = 1;
b = 2;
c = 3;
x = Array.of(a,b,c);

console.log(x);