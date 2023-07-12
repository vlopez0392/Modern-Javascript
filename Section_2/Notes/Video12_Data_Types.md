<h2>Data types</h2>

---

<p align = "justify">
When you deal with data in your code, that data is associated with a data type, regardless of the language. In JS you have two types of data types:
    <ul>
        <li>Primitive Data Types</li>
        <li>Reference Data Types</li>
    </ul>
</p>

<h3>Primitive types</h3>
<p align = "justify">
In a later lecture we will explore the differences in how primitive and reference data types are stored in memory and how they are accessed. First, we will explore the primitive data types:
</p>
<ul align = "justify">
    <li>String: Sequence of characters. Must be in quotes or backticks.</li>
    <li>Number: Integers as well as floating-point numbers. In JS, integers and fp numbers are represented as numbers.</li>
    <li>Boolean: Logical entity / true or false</li>
    <li>Null: Intentional absence of any object value. The type of operator will display a null variable with type 'object' due to historical reasons.</li>
    <li>Undefined: A variable that has not yet been defined or assigned. Usually undefined occurs unintentionally.</li>
    <li>Symbol: Built-in object whose constructor returns a unique symbol. Added in ES6 and not usually used.</li>
    <li>BigInt: Numbers that are greater than the Number type can't handle.</li>
</ul>
<h3>Reference types</h3>
<p align = "justify">
Also known as "objects", reference types are non-primitive. When assigned to a variable, the variable is given a reference to that value. Object literals, arrays, functions are all reference types.
</p>
<p align = "justify">
Notice that a function is defined as function object. 
</p>
<h3>Static Typing vs Dynamic Types</h3>
<p align = "justify">
In JS, we do not explicitly define the types of variables, thus it is a <strong>dynamically-typed language</strong>. Many other languages are <strong>statically-typed language</strong> such as C, C++ and Java.
</p>
<p align = "justify">
TypeScript is a popular superset (it is JS) of JS, which allows static-typing. This can make your code more verbose but less prone to errors. TS is something you might want to learn later on.
</p>