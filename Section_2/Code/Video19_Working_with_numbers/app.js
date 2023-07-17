//Working with numbers
let x;
const num = new Number(5);

//Getting the number of digits in a number 
x = num.toString();
x = num.toFixed(2);
x = num.toPrecision(3);
x = num.toExponential(4);

x = num.toLocaleString('en-US');
console.log(x, typeof x);
