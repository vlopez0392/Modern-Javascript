//IIFE syntax 
(function(){
    const user = 'Vick'; //Not in the global scope 
    console.log(user);
    const hello = () => console.log('Hello from the IIFE');

    hello();
})();

//Adding parameters to an IIFE
(function(name){
    console.log('Hello ' + name);
})('Shawn');

//Named IIFE 
(function hello(){
	console.log('Hello');
})();