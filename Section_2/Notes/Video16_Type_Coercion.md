<h2>Type Coercion</h2>

<p align = "justify">
Type coercion happens implicitly when you apply operators to values which have different types.
</p>

<p align = "justify">
Example 1: Type coercion from number to string. JS implicitly converts the number to string and applies the concatenation operator.
</p>

```Javascript
x = 5 + '5';
```

<p align = "justify">
Example 2: Type coercion from string to number. JS coerces the string into a number since the multiplication operator between strings is not allowed, thus the string is coerced into a number.
</p>

```Javascript
x = 5 * '5'; 
```

<p align = "justify">
Example 3: Type coercion from null to number. JS coerces null into 0.
</p>

```Javascript
x = 5 + null; 
```

<p align = "justify">
Example 4: Type coercion boolean into number. JS coerces boolean true and false values to 1 and 0 respectively to perform the operations.
</p>

```Javascript
x = Number(true);
x = Number(false);
x = 5 + true; //Returns 6
```


