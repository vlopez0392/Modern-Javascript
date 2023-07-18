//Number challenge
//Input random variables
x = Math.floor(Math.random()*100 +1);
y = Math.floor(Math.random()*50 + 1);

//Math operations
sumOutput = x+y;
differenceOutput = x-y;
productOutput = x*y;
quotientOutput = x/y;
moduloOutput   = x%y;

//Output to console
inputVariables = `x = ${x} and y = ${y}`;
output = `\n${x} + ${y} = ${sumOutput} \n${x} - ${y} = ${differenceOutput} \n${x} * ${y} = ${productOutput} \n${x} / ${y} = = ${quotientOutput} \n${x} % ${y} =${moduloOutput}`;
console.log('--------Number challenge:--------');
console.log(inputVariables, output);
