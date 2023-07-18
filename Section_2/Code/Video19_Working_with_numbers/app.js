//Working with numbers
let x;
const num = new Number(5);

//Number methods 
x = num.toString();
x = num.toFixed(2);
x = num.toPrecision(3);
x = num.toExponential(4);
x = num.toLocaleString('en-US');

//Number properties
x = Number.MAX_VALUE;
x = Number.MIN_VALUE;
console.log(x, typeof x);
