var myDate = new Date();
console.log(myDate);

var myPastDate = new Date(1980, 9, 12);
var myFutureDate = new Date(2152, 4, 25);

console.log(myPastDate);
console.log(myFutureDate);

var birtday = new Date (1980, 9, 12, 11, 15, 25);
var birtday2 = new Date (1980, 9, 12, 11, 15, 25);


//get the moth of the date (0-january to 11-December)
console.log(birtday.getMonth());

//get the full year of the date (YYYY)
console.log(birtday.getFullYear());

//get the date of month (1-31)
console.log(birtday.getDate());

//get day of the week (0-6)
console.log(birtday.getDay());

//get the hour of the day(0-23)
console.log(birtday.getHours());

//get the number of miliseconds since the 1st Jan 1970)
console.log(birtday.getTime());

if (birtday.getTime() == birtday2.getTime()) {

    console.log("birtday are eqal");

} else {

    console.log('not eqal')
}

