//Challenge 1
let arr = [1, 2, 3, 4, 5];
arr.push(6);
arr.reverse();
arr.push(0);
console.log(arr);

//Challenge 2
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [5, 6, 7, 8, 9, 10];
let x = arr1.splice(0,4).concat(arr2);
console.log(x);