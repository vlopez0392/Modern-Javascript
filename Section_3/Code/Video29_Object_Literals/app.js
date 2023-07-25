//Object literals introduction
//Creating an object literal
const person = {
    name: 'John Doe',
    age: 30,
    isAdmin: true,
    //Nesting objects
    address: {
        street: '123 Main St',
        city: 'Boston',
        state: 'MA'
    },
    hobbies: ['music','sports'],

    //Keys with multiple words - NOT recommended
    'first name': 'Jane'
};

//Accesing object literal properties 
x = person.name;
x = person['age'];
x = person.address.state;
x = person.hobbies[1]

//Updating properties
person.name = 'Jane Doe'
person.isAdmin = false;

//Deleting properties
delete person.age;

//Adding properties
person.hasChildren = true;

//Adding functions
person.greet = function(){
    console.log(`Hello my name is ${this.name}`);
}

console.log(person['first name']);
person.greet();



