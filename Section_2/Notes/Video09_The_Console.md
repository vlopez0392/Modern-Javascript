<h2>Video 9: Using the console</h2>

---

<p align = "justify">
You will be using the console during your entire career as a web developer. You can find the console in the developer tools in any browser. In Chrome and in macOS you can use ⌘ + ⌥ + I or ⌘ + ⌥ + J to toggle the console on and off. 
</p>

<p align = "justify">
In the console we can see all of our JS logs, errors and warnings. We can also type JS directly into the console. For instance, we can type:
</p>

```
alert(1);
```

<p align = "justify">
This will display a typical alert message in our browser, however, in the console we will see that undefined is returned. This is because the above expression does not return anything. Thus, undefined is returned by default.
</p>

<p align = "justify">
We may also set variables, call functions and other things from the console. However, this is not common to type JS in the console.
</p>

<p align = "justify">
We can clear the function by calling the clear function as follows:
</p>

<ol>
    <li>Calling the clear() function</li>
    <li>In macOS using ⌘ + K </li>
    <li>Reloading the page </li>
</ol>

---

<h3 align = "center">The console object and logging to the console</h3>
<br>
<p align = "justify">
We log to the console with the console object. Objects are common in OOP-based languages and you can think of them as entities with properties and methods. A property is an attribute or data while a method is a function which perform actions.
</p>
<p align = "justify">
With JS, we use the log() method in the console object to output to the console. This is shown below:
</p>

```
console.log("Hello World!");
```

<p align = "justify">
We may log several types of data to the console such as Strings, Numbers and Booleans. We may log different data types simultaneously as shown below by separating each 
</p>

```
console.log("Hello World!", 100, true);
```

<p align = "justify">
The above code snippets are not frequently used because most of the time we will be logging variables and results of functions. The code snippet shown below first creates a variable and outputs this variable to the console.
</p>

```
let x = 200;
console.log(x);
```

<p align = "justify">
The JS ES6 Code snippets extension in VSCode allows you to use convenient shortcuts such as "clg" to quickly type console.log() instead of writing the function call every time. Other shortcuts for programming constructs such as "trycatch" or "ifelse" are available.
</p>

<p align = "justify">
In addition to console.log() we also can use console.error() to log to the console error messages with a red background. Also we can use console.warn() to display warnings in yellow. Finally we can use console.table() to display the KV pairs of objects and object literals in a table fashion. These features are not often used but they are available!
</p>

<p align = "justify">
The console.group() allows us to group logs under a collapsible pane. Finally, we can add CSS styles to our console logs. The following code snippet shows how to do this: 
</p>

```
const style = 'padding:10px; background-color:white; color:green';
console.log('%chello', style);
```