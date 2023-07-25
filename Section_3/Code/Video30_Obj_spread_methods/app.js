let x;

//Alternate way of creating objects
const todo = new Object();

todo.id = 1;
todo.name = 'Buy Milk';
todo.completed = false;
x = todo;

//Nesting objects
const person = {
    address: {
        coords: {
            lat: 30.15,
            lng: -71.3232
        }
    }
}
x = person.address.coords.lat;

//Using the spread operator
const obj1 = {a:1,b:2};
const obj2 = {c:3,d:4};

//Nesting
let obj3 ={obj1, obj2};

//Spreading with the spread operator - More concise and modern
obj3 = {...obj1,...obj2}
x = obj3;

//Spreading with static Object.assign() method
let obj4 = Object.assign({},obj1,obj2);

//Arrays of objects - Commonly dealt with in API resources and DBs
const todos = [
    {id:1, name: 'Buy Milk'},
    {id:2, name: 'Pickup kids from school '},
    {id:3, name: 'Take out trash'}
]
x = todos[0].name;

//Object methods
//Extracting the objects keys
x = Object.keys(todo);
console.log(typeof x, x);

//Getting the number of properties in an object
x = Object.keys(todo).length;
console.log(x);

//Getting all the object's values in an array
x = Object.values(todo);

//Getting all the KV pairs as an array
x = Object.entries(todo);

//Checking if an object has an specific property
x = Object.hasOwnProperty('age');
console.log(x);