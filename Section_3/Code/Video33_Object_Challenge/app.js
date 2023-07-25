//Object challenge
//Creating the library
const library = [
    {
        title: 'Dune',
        author:'Frank Herbert',
        status:{
            own: true,
            reading:false,
            read:false
        }
    },
    {
        title: 'The Godfather',
        author:'Mario Puzo',
        status:{
            own: true,
            reading:false,
            read:false
        }
    },
    {
    title: 'Harry Potter',
    author:'J.K. Rowling',
    status:{
        own: true,
        reading:false,
        read:false
        }
    }
]

//Read all the books
library[0].read = true;
library[1].read = true;
library[2].read = true;

//Destructure the first book's title 
const {title:firstBook} = library[0];
console.log(firstBook);

//Stringifying the library 
const libraryJSON = JSON.stringify(library);
console.log(libraryJSON);