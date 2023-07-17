<h2>Working with numbers</h2>

<p align = "justify">
Just like we have string methods for strings, we also have number methods for numbers. We can use the number constructor to create a number object as follows: 
</p>

```Javascript
const num = new Number(5);
```

<p align = "justify">
This explicit declaration is not often used as Javascript will create a wrapper around number literals when using number methods.
</p>

<h3>Number methods</h3>
<ul align = "justify">
    <li><strong>toString</strong>: Allows you to convert a number into a string object representing that number.
    </li>
    <li><strong>toFixed</strong>: Allows you to specify the number of decimal points in a number. toFixed returns a string representation of a decimal. It rounds the number to match the number of decimal points given in the parameter.
    </li>
    <li><strong>toPrecision</strong>: Returns a number with the specified number of digits including the whole part of the number.
    </li>
    <li><strong>toExponential</strong>: Returns the number in scientific notation with the number of decimal points specified by the argument (Excluding the whole part).
    </li>
    <li><strong>toLocaleString</strong>: Returns a string with a language-sensitive representation of this date.
    </li>
    <li><strong>valueOf</strong>: Returns the value of the number object
    </li>
<ul>

<h3>Number properties</h3>
<ul align = "justify">
    <li>Number.MAX_VALUE</li>: Returns the maximum possible number we can assign to a number variable.
    <li>Number.MIN_VALUE</li>:Returns the minimum possible number we can assign to a number variable.
</ul>
