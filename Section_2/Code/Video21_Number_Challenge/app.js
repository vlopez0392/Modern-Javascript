//Number challenge
//Input random variables
x = Math.floor(Math.random()*100 +1);
y = Math.floor(Math.random()*50 + 1);

//Math operations
sumOutput = x+y;
differenceOutput = x-y;
productOutput = x*y;
quotientOutput = x/y;

//Output to console
inputVariables = `x = ${x} and y = ${y}`;
output = `\nSum of x and y: ${sumOutput} \nDifference of x and y: ${differenceOutput} \nProduct of x and y: ${productOutput} \nquotientOutput = ${quotientOutput}`;
console.log('--------Number challenge:--------');
console.log(inputVariables, output);
