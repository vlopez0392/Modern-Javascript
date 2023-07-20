<h2>Creating Arrays</h2>

<p align = "justify">
    Arrays are a special type of 'object' and a data structure in JS that stores multiple values. An array is declared in JS as shown below: 
</p>

```Javascript
    const arr = [1,2,3,4,5];
```

<p align = "justify">
    The elements in the array can be of any data type. We access them through the indexing operator and they are 0-indexed. This means the first element corresponds to index 0, the second element to index 1 and so on. There are two ways to declare an aray.
</p>
<ol li align = "justify">
    <li>Creating an array literal</li>
    <li>Declaring an array object using the new keyword</li>
</ol>

```Javascript
    //Array literal
    const numbers = [12,45,33,29,39,6];

    //Array constructor
    const fruits = new Array('apple','grape','orange');
```
<h3>Array properties and methods</h3>
<ul li align = "justify">
    <li><strong>Array.length</strong>: Returns the number of elements in the array. This property is not read-only and can be changed to modify the length of the array either by truncating it (deleting items) or by extending it by inserting empty items (undefined type)</li>
</ul>


