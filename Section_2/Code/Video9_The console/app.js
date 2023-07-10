//Simple outputs
console.log(100);
console.log("Hello World");
console.log("Hello World!", 100, true);

//Logging variables
let x = 200;
console.log(x);

//Logging errors, warnings and tables
console.error('error');
console.warn('warning');
console.table({name:'Vick',email:'vlopez@gmail.com'});

//Grouping l`ogs
console.group('simple');
console.error('1');
console.warn('2');
console.table({name:'Vick',email:'vlopez@gmail.com'});
console.groupEnd();

//Applying CSS styles to console logs
const style = 'padding:10px; background-color:white; color:green';
console.log('%chello', style);