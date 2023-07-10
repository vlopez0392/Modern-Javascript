<h2>Variables and constants</h2>

---

<h3>What are variables?</h3>
<p align = "justify">
Variables are containers for pieces of data and data has many data types in JS (next video). There are three ways to declare a variable in JS:
</p>

<p align = "justify">
  <ul>
    <li align = "justify">var: Original declaration of a variable in JS. However, in ES2015 (major-update of JS ES6) let and const were introduced due to scoping reasons (more on this later). In the global scope, var and let work similarly.
    </li>
    <li>let</li>
    <li>const: Used for values that will not be reassigned at a later time. A TypeError will be thrown if we try to reassign to a const variable. Const declarations must also be initialized.</li>
  </ul>
</p>

<p align = "justify">
A variable can be initialized as follows: 
</p>

```
//Creating variables with a string data type
let firstName = 'John';
let lastName  = 'Doe';
console.log(firstName,lastName);
```

<p align = "justify">
Note that if we try to log a let variable before it is declared, a ReferenceError will be thrown. However, if we declare using var, the variable will be hoisted and will be initialized as undefined.
</p>

<p align = "justify">
Naming conventions for variables:
</p>
<ul align = "justify">
  <li>Only numbers, letters, underscores and dollar signs</li>
  <li>Cannot start with numbers. A SyntaxError will be returned if this is rule violated.</li>
</ul>

<p align = "justify">
Multi-word formatting for variables:
</p>
<ul align = "justify">
  <li>firstName = camelCase</li>
  <li>first_name = underscore -> Used in php</li>
  <li>FirstName  = PascalCase -> Convention in React components (Front-end frameworks)</li>
  <li>firstname  = lowercase -> Not readable for > 4 words</li>
</ul>

<p align = "justify">
We cannot reassign a non-primitive or reference let const variable in JS. The following is forbidden in JS:
</p>

```
const arr = [1,2,3,4]
//const = [1,2,3,4,5] //Will return a TypeError
```

<p align = "justify">
What to use? const or let? Well, a good rule of thumb is to use let only if the variable will be reassigned later. Otherwise using const is a good choice.
</p>

<p align = "justify">
We can declare multiple let and const variables at the same time;
</p>

```
let a,b,c
const d = 5, e = 10, f =15
```