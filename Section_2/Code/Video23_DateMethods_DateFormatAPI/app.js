//Date object methods
let x;
let d = new Date(); //Instantiate a date object method into variable d
x = d.toString();

//Timestamp in milliseconds
x = d.getTime();
x = d.valueOf();

//Getting specific parts of the date
x = d.getFullYear(); //Get the year
x = d.getMonth()+1;  //Get the month (0-indexed)
x = d.getDate();     //Get the day of the month 
x = d.getDay();      //Get the day of the week 
x = d.getHours();    //Get the hours 
x = d.getMinutes();  //Get the minutes
x = d.getSeconds();  //Get the seconds
x = d.getMilliseconds();  //Get the milliseconds

//Constructing a date with the above methods (Useful in real-life applications)
x = `${d.getFullYear()}-${d.getMonth()+1}-${d.getDate()}`;

//INTL day time format API -> More powerful way of formatting
//dates in a locale-sensitive way. We can pass arguments to specify
//the locale.

x = Intl.DateTimeFormat('en-US').format(d);
x = Intl.DateTimeFormat('en-GB').format(d);
x = Intl.DateTimeFormat('default').format(d);

//Getting specific parts of the date
x = Intl.DateTimeFormat('default', {month:'long'}).format(d);

//Shorthand form to use the API 
x = d.toLocaleDateString('default',{month:'short'});

console.log(x);