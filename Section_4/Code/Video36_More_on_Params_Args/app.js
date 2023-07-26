//More on parameters and arguments
function registerUser(user){
	return user + ' is registered';
}
console.log(registerUser('John'));

//Default parameters in ES2015 
function registerUser(user = 'Bot'){
	return user + ' is registered';
}
console.log(registerUser());

//Rest params
function sum(...numbers){
	let total = 0;
	for(const num of numbers){
		total += num;
	}
	return total;
}

console.log(sum(1,2,3));

//Objects as parameters
function loginUser(user){
	return `The user ${user.name} with the id of ${user.id} is logged in.`
}

const user = {
	id:1,
	name: 'Vick'
}
console.log(loginUser(user));

//Object literals may also be passed directly as parameters 
console.log(loginUser({
	id:2,
	name: 'Sara'
}));

//Arrays as parameters
function getRandomIndex(arr){
	const index = Math.floor(Math.random()*arr.length);
	return arr[index]
}

console.log(getRandomIndex([11,442,23,44,55]));

