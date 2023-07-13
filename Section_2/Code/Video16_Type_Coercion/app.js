//Type coercion 
//Example 1: Type coercion from number to string
x = 5 + '5';
x = 5 + Number('5');

//Example 2: Type coercion from string to number
x = 5*'5'; 

//Example 3: Type coercion from null into number
x = 5 + null;
x = Number(null);

//Example 4: Type coercion from Boolean to number
x = Number(true);
x = Number(false);
x = 5 + true;

console.log(x);