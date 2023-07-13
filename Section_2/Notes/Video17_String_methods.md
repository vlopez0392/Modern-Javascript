<h2>String methods</h2>

<h3>Template literals</h3>
<p align = "justify">
Template literals allow you to simplify string concatenation. For instance, consider the following expression:
</p>

```Javascript
const name = 'Vick';
const age = 30;
x = 'Hello, my name is ' + name + ' and my I am ' + age + 'years old';
```

<p align = "justify">
We can simplify this using template literals as follows:
</p>

```Javascript
x = `Hello my name is ${name} and I am ${age} years old`;
```

<p align = "justify">
Template literals make use of backticks ` ` and were introduced in ES6. Anything inside them is treated as a string except when the ${} syntax is used. In that case, anything inside the brackets is treated as JS code. We can perform artihmetic operations and place variables inside the brackets. Resulting expressions will be converted into strings and concatenated accordingly.
</p>

<h3>String methods</h3>
<ul align = "justify">
    <li><strong>String length</strong>: We can obtain the length of a string through the str.length attribute. Although strings are primitive, we can call methods and get attributes on them because JS creates a temporary String wrapper on them. This is done behind the scenes.
    </li>
    <br>
    <li>
    <strong>Accesing string characters by indexing</strong>: We may access any character belonging to a string using square brackets [].
    </li>
    <br>
    <li>
    <strong>String prototype</strong>: Contains all the methods associated with the String object.
    </li>
    <br>
    <li>
    <strong>Changing case</strong>: We may change the case, either to lower or upper case using the toUpperCase() and toLowerCase() methods respectively.
    </li>
    <br>
    <li>
    <strong>String indexing</strong>: We access any character in the string using the charAt() method and determine the index of an specific character in the string using the indexOf() method.
    </li>
    <br>
    <li>
    <strong>Substrings</strong>: Using the substring(start,end) method we may obtain a substring of the string the method is being called on. The substring() method returns the part of the string from the start index up to and excluding the end index, or to the end of the string if no end index is supplied. If a single argument is given, the substring returned corresponds to that from the start index until the end of the string.
    </li>
    <br>
    <li>
    <strong>String splicing:</strong>: The splice() method is similar to the substring method, however the splice() method allows negative indexes. You can use slice and substring interchangeably in many situations.
    </li>
    <br>
    <li>
    <strong>Other methods</strong>: The trim() method gets rid of the whitespace in the string. The replace(a,b) method replaces the first argument in the string with the second argument. The includes(str) returns true if the str is found as a substring. 
    </li>
    <br>
    <li>
    <strong>Split</strong>: Splits the string on the separator in the argument ("-","_" or whitespace among others). Returns an array with all the strings splitted by the separator. If an empty string is input as an argument, an array of characters corresponding to the string is returned.
    </li>
</ul>
 
