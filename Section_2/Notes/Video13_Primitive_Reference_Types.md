<h2>Primitive and Reference Types (Allocation)</h2>

<p align = "justify">
<strong>Primitive types</strong>: Stored directly in the "stack", where it is accessed from. 
</p>
<p align = "justify">
<strong>Reference types</strong>: Stored in the "heap" and accessed by reference. For instance, if we create a person object literal as follows: 
</p>

```Javascript
let person = {
    name:'Vick',
    age: 31
}
```

<p align = "justify">
Then, the person variable is stored in the stack but it accesses the data by referencing the object literal in the heap. If we create a newPerson variable and assign it to person: 
</p>

```Javascript
let newPerson = person
```

<p align = "justify">
The newPerson variable will still reference the original data allocated for person in the memory heap. Now, consider the following:
</p>

```Javascript
newPerson.name = 'David'
```

<p align = "justify">
Now, both the person and newPerson variable will have an attribute name with value 'David' since both variables point to the same data in the heap. On the other hand, if newPerson were a string (primitive type) then whenever newPerson is reassigned, the value of person (assume another string) will not change. This is due to the fact, that now both variables are in the stack and correspond to different pieces of data.
</p>