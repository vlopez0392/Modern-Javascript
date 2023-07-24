//Basic array methods
let arr = [34,55,95,20,15];

////Methods to manipulate the current array
//Pushing to an array (last index)
arr.push(100);

//Popping from the array (remove element in the last index)
arr.pop();

//Adding to the beginning of the array 
arr.unshift(100);

//Popping the first element 
arr.shift();

//Reversing the array 
arr.reverse();

////Getting values from the array
//Checking if a specific value is in the array
x = arr.includes(20) 

//Checking the index of a specific value
x = arr.indexOf(150); //Returns -1 if element is not found

//Slice - Does not change the original array
x = arr.slice(1,4) //Does not include the end index. 

//Splice - Changes the original array
x = arr.splice(1,4); //Number of elements to remove

//Deleting a single element 
arr = [34,55,95,20,15];
x = arr.splice(3,1);

///Chaining methods - Allows you to perform several operations sequentially
                //  - We use the dot operator to chain methods. 
arr = [34,55,95,20,15];
x = arr.splice(1,4).reverse().toString().charAt(1);
console.log(x);
