## Declaration vs. Expression
<p align = "justify"> We already know about function declarations:</p>

```js
//Function declaration
function addDollarSign(value){
	return '$' + value;
}
console.log(addDollarSign(100));
```

<p align = "justify">Functions expressions are assigned to a variable and invoked from the variable name. It is good practice to add semi-colons to the end of function expressions.</p>

```js
//Function expression
const addPlusSign = function(value){
	return '+' + value;
};
console.log(addPlusSign(100));
```

#### Differences between function expressions and declarations

<p align = "justify">Functions expressions and declarations are similar yet differ when it comes to hoisting. Hoisting is the process of moving the variable and function declarations to the top of the current scope before the code is executed. Only function declarations are hoisted and thus can be invoked before they are declared. Function expressions on the other hand are not hoisted and can't be invoked before the expression is defined.</p>
