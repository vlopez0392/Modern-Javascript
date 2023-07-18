//Dates and times
d = new Date(2021,0,10,12,30,0); //Month is 0-indexed

//Converting a date object to string
d = d.toString();

//Other formats
d = new Date('2021-07-10T12:30:00'); //Use T to add the time. Separate by colon :
console.log(d);

d = new Date('07/10/2021 12:30:00'); //Use space to sep
console.log(d);

d = new Date('2021-07-10'); //Could be off by a day due to the local timezone
console.log(d);
d = new Date('07-10-2021'); 
console.log(d);

//Timestamps - Unix timestamp -> Integer that represents a number of milliseconds 
//since January 1st 1970
d = Date.now();
console.log(d); //Current timestamp

//Timestamps from specific dates
d = new Date('07-10-2022 12:30:00'); 
d = d.getTime();
d = d.valueOf();
console.log(d);

//Creating a date object from a timestamp
d = new Date()
d = new Date(d.valueOf());
console.log(d);

//JS timestamp expressed in seconds
d = Math.floor(Date.now()/1000);
console.log(d);