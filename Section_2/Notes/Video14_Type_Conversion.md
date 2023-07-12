<h2>Type Conversion</h2>

<p align = "justify">
Type conversion or type casting is the process of explictly converting a value from one type to another. For instance, a string value with value '5' needs to be converted into a number to perform an arithmetic operation on it. Then, type conversion is required to achieve this. This differs from type coercion where the type cast occurs (mostly) implicitly.
</p>

<p align = "justify">
<strong>Example 1</strong>: Converting a string to a number
</p>
<p align = "justify">
This may be required when someone submits a form and the number is input as a string, then if any arithmetic operation is to be performed on this data, then we need to convert it. We can do this in several ways:
</p>
<ul align = "justify">
    <li>Using the parseInt() function</li>
    <li>Using the unary + operator </li>
    <li>Using the Number constructor</li>
</ul>
<p align = "justify">
These are shown below:
</p>

```
let amount = '100';

//Change string to number
//amount = parseInt(amount);
//amount = +amount;
//amount = Number(amount);
```

<p align = "justify">
<strong>Example 2</strong>: Converting a number to a string
</p>
<p align = "justify">
There are several ways to convert a string to a number:
</p> 
<ul align = "justify">
    <li>Using the .toString() method</li>
    <li>Using the String() constructor</li>
</ul>
<p align = "justify">
These are shown below:
</p>

```
let amount = 100;

//amount = amount.toString();
amount = String(amount);

```
<p align = "justify">
Note that in the first case, .toString() is a method associated with a reference values however, it is called on a primitive value. How does JS call a method on a primitive value? To do so, a temporary wrapper of the appropriate object type is created to call the method.
</p>

<p align = "justify">
<strong>Example 3</strong>: Converting a string to a decimal
</p>
<p align = "justify">
To do so, we call the parseFloat() function. Note that parseInt() called on a decimal value will truncate it.
</p>

<p align = "justify">
<strong>Example 4</strong>: Convert number to boolean. 
</p>
<p align = "justify">
To do so, we call the Boolean() constructor. Truthy values such as 1 and Falsy values such as 0 will return true and false respectively.
</p>

<p align = "justify">
<strong>Example 5</strong>: NaN. 
</p>
<p align = "justify">
What if we try to parse a string (which is not read as a number or decimal)into a number (primitive type). In this case, JS will return a special value called 'NaN' or not a number (type 'number'). Some aspects of JS are 'quirky', however, they do not interfere with regular development. NaN is a property of the global window object and is a non-writable property.
</p>
<p align = "justify">
There are five different types of operations that can return NaN:
</p>
<ul align = "justify">
    <li>Parsing a string which does not represent a number into a number (Common in form data)</li>
    <li>Math operations where the result is not a real number</li>
    <li>Using NaN as an operand in an operation</li>
    <li>Using undefined as an operand in an operation</li>
    <li>Operations with strings that do not involve the + operator</li>
</ul>

```
//NaN resulting operations 
console.log(parseInt('hello'));
console.log(Math.sqrt(-1));
console.log(1+NaN);
console.log(undefined + undefined);
console.log('foo'/3);
```

