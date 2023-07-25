//JSON 
const post = {
    title: 'post one',
    body:  'This is the body',
    id: 1,
}

//Convert object literal to JSON string 
//JSON.stringify()
const str = JSON.stringify(post);
console.log(typeof str, str);

//Parsing a string into an object literal 
const obj = JSON.parse(str);
console.log(typeof str, obj);

const posts = [
    {
    title: 'post one',
    body:  'This is the body',
    id: 1,
    },
    {
    title: 'post two',
    body:  'This is the body',
    id: 2,
    }
];

const str2 = JSON.stringify(posts);
console.log(str2);
//Parsing the JSON string 
const back = JSON.parse(str2);
console.log(back[0].id);