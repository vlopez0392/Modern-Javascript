const firstName = 'John';
const lastName  = 'Doe';
const age = 30;

//Naming shorthand- No need to repeat the variable name if the object literal property has the same name.
const person = {
    firstName,
    lastName,
    age
}

//Destructuring
const todo = {
    id:1,
    title:'Take out trash',
    user:{
        name:'David',
    },
};

//Any properties we want to extract or destructure are destructured in the variables in the LHS {}
//Multiple destructuring levels are possible
const {id,title, user:{name}} = todo;
console.log(id,title,name);

//Destructuring keys or properties with different names
const {
    id:todoId,
    title:newTitle, 
    user:{name:newName}
} = todo;
console.log(todo);

//Destructuring arrays
const numbers = [1,2,3,4,5,6];
let [first, second] = numbers;
console.log(first, second);

//Rest operator - Extract the rest of the elements
let [f, s, ...nums] = numbers;
console.log(nums);